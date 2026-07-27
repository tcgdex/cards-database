import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "バクガメス",
		'zh-tw': "阿馴",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "火山で 暮らし 食べた 硫黄が 甲羅の 爆薬の もとになる。 フンも 爆発する 危険物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トラップシェル" },
			damage: 30,
			cost: ["Fire", "Fighting"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを8個のせる。",
			},
		},
		{
			name: { ja: "ヒートスタンプ" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 568805,
				tcgplayer: 597395,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [776],
};

export default card;
