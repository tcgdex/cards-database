import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグビー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [240],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "赤ちゃんの進化",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）、マグマーをマグビーに乗せて（これは進化するマグビーとしてカウントされます）、Magbyからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "発火",
			},
			effect: {
				'ja-jp': "74が機能している場合、防御するポケモンは燃えています。",
			},
			damage: 10,
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
