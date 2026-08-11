import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "パチリス",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "ほっぺに 電気袋を 持つ ポケモンの 仲間。 尻尾から 溜まった 電気を 放出する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しびれるまえば" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけるたび、そのポケモンにダメカンを8個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863543,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [417],
};

export default card;
