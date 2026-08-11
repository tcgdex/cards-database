import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンダース",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "クイック攻撃",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},

		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "ピンミサイル",
			},
			effect: {
				'ja-jp': "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 576623
			},
		},
	],
};

export default card
