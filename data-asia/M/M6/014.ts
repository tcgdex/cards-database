import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "コータス",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "石炭が エネルギーの 源。 コータスの 棲んでいる 山には 多くの 石炭が 眠っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 30,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "かえんばく" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「かえんばく」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899867,
				tcgplayer: 709170,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [324],
};

export default card;
