import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "シズクモ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "餌を 求め 地上に あがる。 水泡を 被るのは 呼吸と 柔らかい 頭を 守るため。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あわ" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561545,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [751],
};

export default card;
