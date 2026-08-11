import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギャロップ",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [78],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "踏みつけ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
			},

		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'ja-jp': "敏ility性",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドが、相手の次のターン中に、RapidAshに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
			damage: 30,
		},
	],


	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576642
			},
		},
	],
};

export default card
