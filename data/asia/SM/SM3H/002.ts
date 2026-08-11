import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "クサイハナ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "猛烈な クサさ！ それなのに １０００人に １人ぐらい これを 好んで かぐ 人がいる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "くさいかおり" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "はっぱカッター" },
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
				cardmarket: 561066,
			},
		},
	],

	evolveFrom: {
		ja: "ナゾノクサ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [44],
};

export default card;
