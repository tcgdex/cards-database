import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "頭の 葉っぱから ほのかに 甘い 香りが 漂う。おとなしくて 日差しを 浴びるのが 大好き。",
	},

	stage: "Basic",

	attacks: [
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
				cardmarket: 891802,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [152],
};

export default card;
