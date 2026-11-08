import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペルシアン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "アローラの ペルシアンとは 額の 宝石の色が 違って 見えるが 成分は あまり 変わらないのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ねこのしゅうかい" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分の場にいるワザ「ねこびより」を持つポケモンが使うワザに必要なエネルギーは、すべてなくなる。",
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
				cardmarket: 557426,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャース",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [53],
};

export default card;
