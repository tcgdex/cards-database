import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "レディバ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "臆病で 常に 群れていないと 不安。 背中の模様は １匹 １匹 微妙に 違う 形。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうそくいどう" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561207,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [165],
};

export default card;
