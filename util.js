function sym(name) {
    switch (name.toLowerCase()) {
        case "w": return '\u{1fc00}'; // white mana
        case "u": return '\u{1fc01}'; // blue mana
        case "b": return '\u{1fc02}'; // black mana
        case "r": return '\u{1fc03}'; // red mana
        case "g": return '\u{1fc04}'; // green mana
        case "c": return '\u{1fc05}'; // colorless mana
        case "0": return '\u{1fc06}'; // 0 mana
        case "1": return '\u{1fc07}'; // 1 mana
        case "2": return '\u{1fc08}'; // 2 mana
        case "3": return '\u{1fc09}'; // 3 mana
        case "4": return '\u{1fc0a}'; // 4 mana
        case "5": return '\u{1fc0b}'; // 5 mana
        case "6": return '\u{1fc0c}'; // 6 mana
        case "7": return '\u{1fc0d}'; // 7 mana
        case "8": return '\u{1fc0e}'; // 8 mana
        case "9": return '\u{1fc0f}'; // 9 mana
        case "10": return '\u{1fc10}'; // 10 mana
        case "11": return '\u{1fc11}'; // 11 mana
        case "12": return '\u{1fc12}'; // 12 mana
        case "13": return '\u{1fc13}'; // 13 mana
        case "14": return '\u{1fc14}'; // 14 mana
        case "15": return '\u{1fc15}'; // 15 mana
        case "16": return '\u{1fc16}'; // 16 mana
        case "17": return '\u{1fc17}'; // 17 mana
        case "18": return '\u{1fc18}'; // 18 mana
        case "19": return '\u{1fc19}'; // 19 mana
        case "20": return '\u{1fc1a}'; // 20 mana
        case "x": return '\u{1fc1b}'; // X mana
        default: return null; // no value found!
    }
}