import React from 'react';

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ sent?: string }> }) {
  const params = await searchParams;
  const sent = params?.sent === "1";
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Contactez EtiquetteConform</h1>
          <p className="subtitle">Une question ? Écrivez-nous, nous répondons sous 24h.</p>
          {sent && (
            <p className="card" style={{ maxWidth: 520, margin: "1rem auto", background: "#ecfdf5", color: "#065f46" }}>
              ✅ Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.
            </p>
          )}
          <form action="/api/contact" method="post" className="card" style={{ maxWidth: 520, margin: '2rem auto', textAlign: 'left' }}>
            <p style={{ marginBottom: '1rem' }}>
              <label>Nom<br /><input type="text" name="name" required style={{ width: '100%', padding: '0.5rem' }} /></label>
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <label>Email<br /><input type="email" name="email" required style={{ width: '100%', padding: '0.5rem' }} /></label>
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <label>Message<br /><textarea name="message" rows={4} required style={{ width: '100%', padding: '0.5rem' }} /></label>
            </p>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </section>
    </main>
  );
}
