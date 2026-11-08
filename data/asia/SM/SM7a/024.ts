import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アシレーヌ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'ja-jp': "歌声を 活かし 戦う。 毎日の のどの メンテナンスは トレーナーの 大切な 役目。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハーモニクス" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、手札から自分のポケモンにエネルギーをつけるとき、同時に2枚までつけられる。（ワザ・「ハーモニクス」以外の特性・トレーナーズでつける場合はのぞく。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒプノスプラッシュ" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558912,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オシャマリ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [730],
};

export default card;
