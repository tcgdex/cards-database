import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ノコッチ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "暗い場所に 迷路を 作る。 だれかに みられると 尻尾で 地面を 掘って 逃げようとする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "あなをほる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752837,
				tcgplayer: 568390,
			},
		},
	],

	retreat: 0,
	regulationMark: "H",
	rarity: "Common",
	dexId: [206],
};

export default card;
