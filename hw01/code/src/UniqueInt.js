const fs = require('fs');
const path = require('path');

class UniqueInt {
    constructor() {
        // We'll use a fixed range from -1023 to 1023 → size = 2047
        this.offset = 1023;
        this.seen = new Array(2047).fill(false);
    }

    isValidIntegerLine(line) {
        // Trim the line and split by whitespace
        const parts = line.trim().split(/\s+/);

        // Must be exactly one part and must be a valid integer
        if (parts.length !== 1) return false;

        const num = parseInt(parts[0], 10);
        return !isNaN(num) && Number.isInteger(num);
    }

    processFile(inputPath, outputPath) {
        // Reset seen for each file
        this.seen.fill(false);

        const fileContent = fs.readFileSync(inputPath, 'utf-8');
        const lines = fileContent.split(/\r?\n/);

        for (const line of lines) {
            if (!this.isValidIntegerLine(line)) continue;

            const num = parseInt(line.trim(), 10);
            const index = num + this.offset;
            this.seen[index] = true;
        }

        const result = [];

        for (let i = 0; i < this.seen.length; i++) {
            if (this.seen[i]) {
                result.push(i - this.offset);
            }
        }

        // Write each unique integer on a new line
        fs.writeFileSync(outputPath, result.join('\n'), 'utf-8');

        console.log(`✅ Processed: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    }
}

// === Main code ===
const inputDir = path.join(__dirname, '../../sample_inputs');
const outputDir = path.join(__dirname, '../../sample_results');

// Make sure output folder exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const processor = new UniqueInt();

fs.readdirSync(inputDir).forEach((filename) => {
    const inputFile = path.join(inputDir, filename);
    const outputFile = path.join(outputDir, `${filename}_results.txt`);

    processor.processFile(inputFile, outputFile);
});
