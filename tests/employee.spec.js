import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Validate employee JSON', async () => {

  const filePath = path.join(process.cwd(), 'js', 'detail.json');

  const employee = JSON.parse(
    fs.readFileSync(filePath, 'utf-8')
  );

  const hasAlternativeMobile =
    !!employee.alternativeMobileNumber;

  const hasApiSkill =
    employee.skills.includes('API');

  console.log('Has Alternative Mobile:', hasAlternativeMobile);
  console.log('Has API Skill:', hasApiSkill);

  expect(hasAlternativeMobile).toBe(true);
  expect(hasApiSkill).toBe(true);
});