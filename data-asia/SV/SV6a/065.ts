import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・ブルル",
	},

	illustrator: "IKEDA Saki",
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
			type: "holo",
			thirdParty: {
				cardmarket: 773814,
				tcgplayer: 566316,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [787],
};

export default card;
