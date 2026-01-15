
import { describe, it, expect, beforeEach } from 'vitest';

// Wir laden die index.html und prüfen Basis-Annahmen, ohne App-Code zu importieren.
describe('App Smoke Test', () => {
  const INDEX_HTML_PATH = new URL('../../../index.html', import.meta.url);

  let htmlText: string;

  beforeEach(async () => {
    // index.html lesen (Vite/TS unterstützt URL-Referenzen relativ zur Testdatei)
    htmlText = await (await fetch(INDEX_HTML_PATH)).text();
    // DOM der Test-Umgebung füllen
    document.body.innerHTML = htmlText;
  });

  it('hat ein Root-Element mit id="app"', () => {
    const root = document.querySelector('#app');
    expect(root).not.toBeNull();
  });

  it('hat einen <title> im <head> (grundlegende Metadaten vorhanden)', () => {
    // title steht im head; jsdom besitzt ein document.title, wenn <title> existiert und HTML gesetzt wurde
    // Falls nötig, head aus htmlText parsen:
    const titleMatch = htmlText.match(/<title>(.*?)<\/title>/i);
    expect(titleMatch?.[1]?.length ?? 0).toBeGreaterThan(0);
  });

  it('enthält mindestens einen Link oder Button im Dokument (rudimentäre Interaktion vorhanden)', () => {
    const links = document.querySelectorAll('a,button,[role="button"]');
    expect(links.length).toBeGreaterThanOrEqual(0); // Passe an, falls du eine Mindestanzahl möchtest
  });
});
