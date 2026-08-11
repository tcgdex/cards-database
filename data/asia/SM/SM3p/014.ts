import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウルガモス",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "戦いになると ６枚の 羽から 火の粉の りんぷんを まき散らして あたり 一面を 火の海にする。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あついせんぷう" },
			effect: {
				'ja-jp': "自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 60,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560172,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "メラルバ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [637],
};

export default card;
