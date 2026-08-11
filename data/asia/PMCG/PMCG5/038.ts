import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチスのビリリダマ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "スピンボール",
			},
			effect: {
				'ja-jp': "フリップ1コイン。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "ダブルスピン",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576813
			},
		},
	],
};

export default card
