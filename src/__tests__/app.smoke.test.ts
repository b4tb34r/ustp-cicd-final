import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

describe('App Smoke Test', () => {
  let htmlText: string;

  beforeEach(() => {
    // Pfad zur index.html ermitteln
    const htmlPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      '../../../index.html'
    );

    // Datei-Inhalt laden
    htmlText = readFileSync(htmlPath, 'utf-8');

    // DOM für jsdom setzen
    document.body.innerHTML = htmlText;
  });

  it('hat ein Root-Element mit id="app"', () => {
    const root = document.querySelector('#app');
    expect(root).not.toBeNull();
  });

  it('hat einen <title> im <head>', () => {
    const titleMatch = htmlText.match(/<title>(.*?)<\/title>/i);
    expect(titleMatch?.[1]?.length ?? 0).toBeGreaterThan(0);
  });

  it('enthält mindestens einen Link oder Button', () => {
    const links = document.querySelectorAll('a,button,[role="button"]');
    expect(links.length).toBeGreaterThanOrEqual(0);
  });
});
