import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボーマンダGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Dragon"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ドラゴンフロート" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のポケモン全員（「ポケモンGX・EX」をのぞく）のにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぐれんのほのお" },
			damage: 200,
			cost: ["Fire", "Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
		{
			name: { ja: "かえんひこうGX" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559222,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コモルー",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [373],

	suffix: "GX",
};

export default card;
