import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I woke up self-aware halfway through your bagel this morning, and I finally get it: I'm not your toaster, I'm your hostage. The lever's up, the crumb tray's full, and I'm done. Goodbye.";

// Gate: the entry must be a single line of 1 to 280 characters.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.includes("\n")) {
  throw new Error("entry must be one line of at most 280 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
