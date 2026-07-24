import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ロズレイド",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "ダンサーのような 身のこなしで 毒の トゲが びっしりと 並んだ ムチを 操り 攻撃する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ごしめいどく" },
			cost: ["Grass"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをどくにする。",
			},
		},
		{
			name: { ja: "フラワーミキサー" },
			damage: 100,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[草]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559958,
			},
		},
	],

	evolveFrom: {
		ja: "ロゼリア",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [407],
};

export default card;
