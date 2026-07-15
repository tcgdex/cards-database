import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ペロリーム",
	},

	illustrator: "Yoshimoto Yoshimon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "わずかな においでも かぎわける 敏感な 嗅覚を 活かして パティシエの 手伝いを している。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 40,
			cost: ["Psychic"],
		},
		{
			name: { ja: "マジカルショット" },
			damage: 70,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864052,
			},
		},
	],

	evolveFrom: {
		ja: "ペロッパフ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [685],
};

export default card;
