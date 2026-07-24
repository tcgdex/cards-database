import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナッキー",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "トゲの たくさん ついた 尻尾を 相手に たたきつけて 攻撃。 気性の 激しい ポケモン。",
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
				ja: "のぞむなら、自分の手札にある[草]エネルギーを1枚、自分のポケモンにつける。",
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
		ja: "ヤナップ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [512],
};

export default card;
