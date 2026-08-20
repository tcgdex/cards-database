import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "キモリ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "足の 裏の 小さな トゲを 引っ掛けて 垂直の カベを 登ることが できる。太い 尻尾を たたきつけて 攻撃する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891895,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [252],
};

export default card;
