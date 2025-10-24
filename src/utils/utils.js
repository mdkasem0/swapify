// Utility function to open user mailbox
export const redirectToMailbox = (email) => {
  const domain = email.split("@")[1].toLowerCase();
  let url = "";

  if (domain.includes("gmail")) url = "https://mail.google.com/";
  else if (domain.includes("yahoo")) url = "https://mail.yahoo.com/";
  else if (domain.includes("outlook") || domain.includes("hotmail"))
    url = "https://outlook.live.com/mail/";
  else if (domain.includes("icloud")) url = "https://www.icloud.com/mail/";
  else url = `https://${domain}`; // fallback to custom domain

  window.open(url, "_blank"); // opens mailbox in new tab
};