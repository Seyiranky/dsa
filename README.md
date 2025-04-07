
# 📊 Unique Integers - DSA Programming Assignment 1

This project is part of the **Enterprise Web Development** course, focused on practicing **data structures and algorithms** by reading a file of integers, identifying unique values, and writing them to a results file—all **without using built-in sorting or list manipulation libraries**.

---

## 🧠 Problem Description

Given a list of integers in a file (one integer per line), the task is to:

1. **Read** the file.
2. **Extract only valid integers** (skipping blank lines, lines with multiple values, or non-integer input).
3. **Filter unique integers**.
4. **Sort them in increasing order**.
5. **Write the unique integers** to a results file (one per line).

---

## 📁 Project Structure

```
/dsa/hw01/
├── code/
│   └── src/
│       └── UniqueInt.js        # Main source file
├── sample_inputs/              # Input text files provided by the facilitator
│   ├── sample_input_01.txt
│   ├── sample_input_02.txt
│   └── ...
├── sample_results/             # Output files will be generated here
│   ├── sample_input_01.txt_results.txt
│   └── ...
└── README.md                   # This file
```

---

## ⚙️ How It Works

### Core Logic

- A **boolean array** of size 2047 (to cover range -1023 to 1023) is used to track which integers have been seen.
- Each valid integer maps to an index in this array using:  
  `index = integer + 1023`
- After processing the input, the array is scanned to collect all indices where the value is `true`, then the result is written to a file.

### Input Rules

✔ Valid:
- Lines with a **single** integer (e.g., `  5`, `-9  `, ` 62 `)

❌ Invalid (ignored):
- Lines with multiple numbers (e.g., `5 9`)
- Lines with non-numeric content (e.g., `hello`, `2.5`, `3a`)
- Empty or whitespace-only lines

---

## 🚀 How to Run

### 1. Navigate to the source directory:
```bash
cd /c/Users/Seyi\ Adebayo/dsa/hw01/code/src
```

### 2. Run the script:
```bash
node UniqueInt.js
```

✅ The script will:
- Read all files inside `../../sample_inputs`
- Generate result files in `../../sample_results`
- Log each file that it processed

---

## 🧪 Sample Output Format

If your `sample_input_02.txt` contains:
```
5
14
5
-9
62
-1
-9
-9
```

The corresponding result file will contain:
```
-9
-1
5
14
62
```

---

## 🧰 Technologies Used

- **Language**: JavaScript (Node.js)
- **Core Modules**: `fs`, `path`
- **No external libraries** used for sorting, sets, or arrays (as per the assignment rules)

---

## 🚧 Limitations

- Only works with integers in the range `-1023` to `1023`.
- Designed for basic sample input files (not streaming large datasets).

---

## 📈 Evaluation Criteria

| Criteria           | Max Points |
|--------------------|------------|
| Output Format      | 4 pts      |
| Correctness        | ✔️          |
| Memory Usage       | ✔️          |
| Runtime Efficiency | ✔️          |
| Documentation      | ✔️ (this file!) |
| Code Structure     | ✔️          |

---

## 🙋‍♂️ Author

**Seyi Adebayo**  
Enterprise Web Development Student  
*African Leadership University*

---

## 📎 Notes

- To clear the results folder:
```bash
rm -rf <project folder>/sample_results/*
```

- If you're using Windows, ensure you escape spaces or use quotes in folder paths.

---