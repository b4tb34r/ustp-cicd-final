
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBoard } from './gameboard';
import { BOARD_WIDTH, BOARD_HEIGHT, CELL_SIZE } from '@/lib/tetris';

// Mock für CanvasRenderingContext2D
const mockCtx = {
  clearRect: jest.fn(),
  strokeRect: jest.fn(),
  fillRect: jest.fn(),
  fillText: jest.fn(),
  beginPath: jest.fn(),
  stroke: jest.fn(),
  fillStyle: '',
  strokeStyle: '',
  lineWidth: 0,
  font: '',
  textAlign: '',
  textBaseline: '',
};

beforeEach(() => {
  jest.clearAllMocks();
  HTMLCanvasElement.prototype.getContext = jest.fn(() => mockCtx as unknown as CanvasRenderingContext2D);
});

describe('GameBoard', () => {
  const emptyBoard = Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => ({ filled: false, color: '' }))
  );

  it('rendert ein Canvas mit korrekten Dimensionen', () => {
    const { getByRole } = render(
      <GameBoard board={emptyBoard} currentPiece={null} gameOver={false} />
    );
    const canvas = getByRole('img', { hidden: true }) as HTMLCanvasElement;
    expect(canvas).toBeInTheDocument();
    expect(canvas.width).toBe(BOARD_WIDTH * CELL_SIZE);
    expect(canvas.height).toBe(BOARD_HEIGHT * CELL_SIZE);
  });

  it('ruft clearRect und strokeRect für Board-Zellen auf', () => {
    render(<GameBoard board={emptyBoard} currentPiece={null} gameOver={false} />);
    expect(mockCtx.clearRect).toHaveBeenCalled();
    expect(mockCtx.strokeRect).toHaveBeenCalled();
  });

  it('zeichnet Game Over Overlay, wenn gameOver true ist', () => {
    render(<GameBoard board={emptyBoard} currentPiece={null} gameOver={true} />);
    expect(mockCtx.fillText).toHaveBeenCalledWith(
      'GAME OVER',
      expect.any(Number),
      expect.any(Number)
    );
  });

  it('zeichnet aktuelle Tetromino, wenn vorhanden', () => {
    const piece = {
      shape: [[1, 1], [1, 1]],
      position: { x: 0, y: 0 },
      color: 'red',
    };
    render(<GameBoard board={emptyBoard} currentPiece={piece} gameOver={false} />);
    expect(mockCtx.fillRect).toHaveBeenCalled();
  });
});
