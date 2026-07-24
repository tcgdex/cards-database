import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "コドラ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "鉄鉱石が 大好物。 鋼の 体を ぶつけ合って 縄張り 争いを する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こうちょく" },
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 70,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558151,
			},
		},
	],

	evolveFrom: {
		ja: "ココドラ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [305],
};

export default card;
