import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロロームex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アクセルフラッシュ" },
			damage: "20+",
			cost: ["Metal"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "スピードブレイク" },
			damage: 250,
			cost: ["Metal", "Metal", "Metal"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773827,
				tcgplayer: 566329,
			},
		},
	],

	evolveFrom: {
		ja: "ブロロン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [966],

	suffix: "EX",
};

export default card;
