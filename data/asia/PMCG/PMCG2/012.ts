import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナッシー",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "テレポート",
			},
			effect: {
				'ja-jp': "ベンチ付きポケモンの1つを備えたスイッチのexeggutor。",
			},

		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "大きな卵の幅",
			},
			effect: {
				'ja-jp': "Exeggutorに取り付けられたエネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},

		},
	],

	retreat: 3,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 616306
			},
		},
	],
};

export default card
