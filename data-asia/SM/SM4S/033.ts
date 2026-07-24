import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "コドラ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "鉄鉱石が 大好物。 鋼の 体を ぶつけ合って 縄張り 争いを する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "メタルクロー" },
			damage: 20,
			cost: ["Metal"],
		},
		{
			name: { ja: "ぶちかます" },
			damage: 80,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560345,
			},
		},
	],

	evolveFrom: {
		ja: "ココドラ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [305],
};

export default card;
