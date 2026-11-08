import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤナッキー",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "トゲの たくさん ついた 尻尾を 相手に たたきつけて 攻撃。 気性の 激しい ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "リーフサプライ" },
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、自分の手札にある[草]エネルギーを1枚、自分のポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561070,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤナップ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [512],
};

export default card;
