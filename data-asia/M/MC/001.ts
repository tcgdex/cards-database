import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのナゾノクサ",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "月の光を 浴びて 目覚めると あちこち 動きまわる。 昼間は 地面の中で じっとしている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863288,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [43],
};

export default card;
