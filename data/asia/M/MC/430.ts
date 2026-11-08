import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーボ",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "育つほどに どんどん 長くなる。 そして 夜中は 木の枝に グルグルと 絡まって 休む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まぜこみどく" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをどくとこんらんにする。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863732,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [23],
};

export default card;
