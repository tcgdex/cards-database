import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "チームプレイで とりポケモンの 巣穴から タマゴを 盗み出すが 誰が 食うかで ケンカになるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうそくいどう" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555134,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [215],
};

export default card;
