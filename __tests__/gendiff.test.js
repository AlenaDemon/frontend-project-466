import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePathResult = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFixturePath = (filename) => path.join(__dirname, '..', 'bin', filename);

const result = fs.readFileSync(getFixturePathResult('result.txt'), 'utf8');

test('gendiff', () => {
  expect(
    gendiff(getFixturePath('file1.json'), getFixturePath('file2.json')),
  ).toBe(result);
});
