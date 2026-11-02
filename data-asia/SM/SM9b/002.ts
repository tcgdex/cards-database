import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "キャタピー",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "早く 成長 したいのか 食欲旺盛で １日に １００枚の 葉っぱを 食らう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ようか" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひっかける" },
			damage: 10,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558120,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [10],
};

export default card;
