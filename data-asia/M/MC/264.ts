import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲデマル",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "背中の 長い 毛で 雷や でんきポケモンの 電撃を 受けて 電気袋に 充電する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とげスパーク" },
			damage: 40,
			cost: ["Lightning", "Colorless"],
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
				cardmarket: 863560,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [777],
};

export default card;
