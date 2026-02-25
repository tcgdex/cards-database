import { variant_detailed } from "../../public/v2/api";

// Adding new keys to this array will break existing identifiers, so be cautious when modifying it. Only include keys that are essential for identifying a variant uniquely.
const includeKeys: Array<keyof variant_detailed> = ['type', 'subtype', 'size', 'stamp', 'foil'];

export function variantToIdentifier(variant: variant_detailed): string {
	const str = Object.entries(variant)
		.filter(([key, value]) => includeKeys.includes(key as keyof variant_detailed) && value != null)
		.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
		.map(([, value]) => {
			if (Array.isArray(value)) {
				return value.slice().sort().join('');
			}
			return String(value);
		})
		.join('|');

	let hash = 0n;
	for (let i = 0; i < str.length; i++) {
		hash = (hash * 31n) + BigInt(str.charCodeAt(i));
	}

	const absHash = hash < 0n ? -hash : hash;
	return absHash.toString(36);
}
