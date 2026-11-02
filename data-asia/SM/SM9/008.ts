import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "６匹で １匹。 なにかあって １匹 減っても 翌朝に なると 必ず ６匹に 戻っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "タネマシンガン" },
			damage: "10×",
			cost: ["Grass"],
			effect: {
				ja: "コインを4回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558286,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [102],
};

export default card;
