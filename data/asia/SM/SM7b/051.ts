import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュカインGX",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おんそくぎり" },
			damage: 60,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "リーフサイクロン" },
			damage: 130,
			cost: ["Grass", "Grass"],
			effect: {
				'ja-jp': "このポケモンについている[草]エネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
		{
			name: { ja: "ジャングルヒールGX" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "[草]エネルギーがついている自分のポケモン全員のHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558876,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジュプトル",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [254],

	suffix: "GX",
};

export default card;
