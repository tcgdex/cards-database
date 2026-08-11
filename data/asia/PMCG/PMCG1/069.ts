import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハクリュー",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [148],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラム",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ハイパービーム",
			},
			effect: {
				'ja-jp': "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575621
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577048
			},
		},
	],
};

export default card
