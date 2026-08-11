import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミロティック（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [350],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "共有",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、相手の手を見ることができます。そこにあるサポーターカードの効果を、このパワーの効果として使用できます。 （サポーターカードは相手の手に残ります。）ターンごとに1つ以上の共有Pokã©Powerを使用することはできません。 Miloticが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'ja-jp': "フレア",
			},
			damage: 60,
		},
	],

	retreat: 2,

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
