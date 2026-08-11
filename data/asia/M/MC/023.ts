import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ツボツボ",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ツボのような 甲羅の 中に ためこんだ 木の実は いつの間にか ドロドロの ジュースに 変わる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はっこうジュース" },
			effect: {
				ja: "このポケモンに[G]エネルギーがついているなら、自分の番に1回使える。自分のポケモン1匹のHPを「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863314,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [213],
};

export default card;
