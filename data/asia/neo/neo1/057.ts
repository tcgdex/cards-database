import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Steelix",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 110,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "テールクラッシュ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
