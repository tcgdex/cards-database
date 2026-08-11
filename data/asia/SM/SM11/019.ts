import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニシズクモ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "普段は 水の中で 過ごす。 満腹の とき 仕留めた 獲物は 頭の 水泡に 仕舞っておく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "からめてひっぱる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "ねばねばネット" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、ワザに必要なエネルギーとにげるためのエネルギーが、それぞれ【無】エネルギー1個ぶん多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556978,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シズクモ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [752],
};

export default card;
