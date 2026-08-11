import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アシレーヌGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Water"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "バブルビート" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の場のポケモンについている[水]エネルギーの数x20ダメージ追加。",
			},
		},
		{
			name: { ja: "うみなり" },
			damage: 120,
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "グランエコーGX" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のポケモン全員のHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561582,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オシャマリ",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [730],

	suffix: "GX",
};

export default card;
