import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力は 弱く 頼りないのに 繁殖力だけ 物凄い。 飽きるほど みかけるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねてかわす" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561008,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [129],
};

export default card;
