const WHATSAPP_MESSAGE = 'Hola me interesa adquirir productos en proveedoras electricas';

export const contactInfo = {
  ext: '506',
  number: '7007 1317',
  whatsAppLink: `https://api.whatsapp.com/send?phone=50670071317&text=${WHATSAPP_MESSAGE}`,
  addressLink: "https://goo.gl/maps/Vd16fzLpjrpTqEot7",
};


export const CONTACT = `+${contactInfo.ext} ${contactInfo.number}`;
export const ADDRESS = "Jaboncillal, San José, Goicoechea";
