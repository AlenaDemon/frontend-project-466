#!/usr/bin/env node

import { Command } from 'commander';
import app from '../src/index.js';
import fs from 'fs'
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((first, second) => {
    console.log(app(first, second));

  })
  .option('-f, --format [type]', 'output format')

program.parse();

