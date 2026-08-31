import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ナエトル",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "土で できた 背中の 甲羅は 水を 飲むと さらに 硬くなる。 湖の ほとりで 暮らしている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はっぱカッター" },
			damage: 60,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891806,
			},
		},
	],

	retreat: 3,
	rarity: "Promo",
	dexId: [387],
};

export default card;
