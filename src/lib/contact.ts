export const CONTACT_EMAIL = "brolancers.officialcompany@gmail.com";

export function buildMailtoUrl(name: string, email: string, message: string): string {
  const subject = encodeURIComponent(`New inquiry from ${name || "Website Visitor"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

/** Opens in browser — works on laptops without a desktop mail app configured. */
export function buildGmailComposeUrl(name: string, email: string, message: string): string {
  const subject = encodeURIComponent(`New inquiry from ${name || "Website Visitor"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${subject}&body=${body}`;
}
