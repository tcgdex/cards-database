import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "wynaut",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [360],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "赤ちゃんの進化",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）、Wobbuffetを手からWynaut（これは進化するWynautとしてカウント）に置き、Wynautからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "混乱波",
			},
			effect: {
				'ja-jp': "Wynautと防御ポケモンの両方が混乱しています。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
