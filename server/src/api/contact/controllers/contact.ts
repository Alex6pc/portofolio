/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
  // Keep the default controllers
  ...createCoreController('api::contact.contact'),

  // Add our custom create method
  async create(ctx) {
    try {
      const { data } = ctx.request.body;

      // Create contact entry in Strapi
      const entry = await strapi.entityService.create('api::contact.contact', {
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          status: 'unread',
          publishedAt: new Date()
        }
      });

      // Send email notification
      await strapi.plugins['email'].services.email.send({
        to: process.env.SMTP_USERNAME,
        from: process.env.SMTP_USERNAME,
        subject: 'New Contact Form Submission',
        text: `
          New contact form submission:
          
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone || 'Not provided'}
          Message: ${data.message}
        `,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `
      });

      return { success: true, data: entry };
    } catch (err) {
      ctx.throw(500, err);
    }
  }
}));
