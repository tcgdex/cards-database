import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "オーベム",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーで 相手の 記憶を 書き換えてしまう。 あなたも 既に 書き換えられているかも しれない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サイコパンチ" },
			damage: 20,
			cost: ["Psychic"],
		},
		{
			name: { ja: "ミステリーノイズ" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556999,
			},
		},
	],

	evolveFrom: {
		ja: "リグレー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [606],
};

export default card;
