import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Laugh Track: The Crypto Trading Joke — one line, deterministic, no network.
// The freeze is the joke: the account is protected from selling, then released after the crash.
const LINE = "The exchange froze my account for suspicious activity. The suspicious activity was selling. It unfroze it once the coin fell another 40 percent.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
