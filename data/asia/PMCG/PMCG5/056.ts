import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチスのコラッタ",
	},
	illustrator: "Atsuko Nishida",

	rarity: "Common",
	category: "Pokemon",
	dexId: [19],
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "フォーカスエネルギー",
			},
			effect: {
				'ja-jp': "次のターン中、サージ中佐のラッタタクイック攻撃ベースの損傷は2倍になります。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "クイック攻撃",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576809
			},
		},
	],
};

export default card
