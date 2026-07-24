import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・ブルル",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "大木を 引き抜き ブンブン 振り回す。 草木を 茂らせて そのエネルギーを 吸収する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ウッドハンマー" },
			damage: 220,
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863352,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [787],
};

export default card;
