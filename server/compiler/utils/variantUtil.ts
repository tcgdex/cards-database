
import { SupportedLanguages, variant_detailed } from "../../../interfaces";
import translate from "./translationUtil";

// Adding new keys to this array will break existing identifiers, so be cautious when modifying it. Only include keys that are essential for identifying a variant uniquely.
const includeKeys: Array<keyof variant_detailed> = ['type', 'subtype', 'size', 'stamp', 'foil'];

export function variantToIdentifier(variant: variant_detailed): string {
	const enVariant = formatVariant(variant,"en" as SupportedLanguages);

	const str = Object.entries(enVariant)
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

export function formatVariant(variant: variant_detailed, lang: SupportedLanguages): object {
	return {
		type: translate('variantType', variant.type, lang) as any,
		subtype: translate('variantSubtype', variant.subtype, lang) as any,
		size: variant.size && variant.size !== 'standard'
			? translate('variantSize', variant.size, lang) as any
			: translate('variantSize', "standard", lang) as any,
		stamp: variant.stamp
			? variant.stamp.map((stamp) => translate('variantStamp', stamp, lang))
			: undefined,
		foil: variant.foil ? translate('variantFoil', variant.foil, lang) : undefined,
		thirdParty: variant.thirdParty
	};
}
