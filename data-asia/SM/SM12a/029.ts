import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼニガメ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "甲羅に 閉じこもり 身を 守る。 相手の すきを 見逃さず 水を 噴き出して 反撃する。",
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
				cardmarket: 543536,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [7],
};

export default card;
