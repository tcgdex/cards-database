import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ずる賢く １匹が 親を 誘き寄せ もう１匹が タマゴを 取るという チームプレーも 見せる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いあいぎり" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "つめよる" },
			damage: 30,
			cost: ["Water", "Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863466,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [215],
};

export default card;
