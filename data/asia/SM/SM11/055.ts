import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤミラミ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'ja-jp': "硬いツメで 土を 掘り 太い キバで 宝石を バリバリかじる。 メレシーが 大好物だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミラージェム" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを8個のせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557017,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [302],
};

export default card;
