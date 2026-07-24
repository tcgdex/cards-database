import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシアン",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "アローラの ペルシアンとは 額の 宝石の色が 違って 見えるが 成分は あまり 変わらないのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ねこのしゅうかい" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場にいるワザ「ねこびより」を持つポケモンが使うワザに必要なエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544166,
			},
		},
	],

	evolveFrom: {
		ja: "ニャース",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "None",
	dexId: [53],
};

export default card;
