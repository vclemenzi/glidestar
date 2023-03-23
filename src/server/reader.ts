import fs from 'fs';
import path from 'path';

export function reader(directoryPath: string): string[] {
    const files = fs.readdirSync(directoryPath);
    const result = [];
  
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
  
      if (stats.isDirectory()) {
        const subFiles = reader(filePath);
        result.push(...subFiles);
      } else {
        result.push(filePath);
      }
    }
  
    return result;
  }