import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [375],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "サイキックブーム",
			},
			effect: {
				'ja-jp': "ディフェンディングポケモンに付随する各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'ja-jp': "素早い打撃",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
