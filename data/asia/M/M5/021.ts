import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イルカマン",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'ja-jp': "５０ノットの 速さで 泳ぎ 溺れている 人や ポケモンを 助ける 海の ヒーロー。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ジャスティスナックル" },
			damage: "80+",
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "相手のサイドの残り枚数が1枚なら、200ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888263,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナミイルカ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [964],
};

export default card;
