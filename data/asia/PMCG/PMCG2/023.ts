import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シャワーズ",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [134],
	hp: 80,
	types: ["Water"],
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
			cost: ["Water", "Water", "Colorless"],
			name: {
				'ja-jp': "ウォーターガン",
			},
			effect: {
				'ja-jp': "Vaporeonに取り付けられた各水エネルギーに対して30のダメージと10のダメージがさらに10件のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。 2番目の後の余分な水エネルギーはカウントされません。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 576650
			},
		},
	],
};

export default card
