import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "コータス",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "石炭が エネルギーの 源。 コータスの 棲んでいる 山には 多くの 石炭が 眠っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひだね" },
			damage: 20,
			cost: ["Fire"],
		},
		{
			name: { ja: "ヒートブラスト" },
			damage: 110,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863397,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [324],
};

export default card;
