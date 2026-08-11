import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "vileplume（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "毒花粉",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、防御するpokã©monの1つを選択します。そのポカモンは現在毒されています。 vileplumeが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Metal"],
			name: {
				'ja-jp': "ポルターガイスト",
			},
			effect: {
				'ja-jp': "相手の手を見てください。この攻撃は、30のダメージと、対戦相手の手の各トレーナーカードに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
