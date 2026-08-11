import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピロスワイン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [221],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "昼寝",
			},
			effect: {
				'ja-jp': "Piloswineから3つのダメージカウンターを削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "高速電荷",
			},
			effect: {
				'ja-jp': "Piloswineはそれ自体に30のダメージを与えます。 Piloswineは、次のターン中にこの攻撃を使用できません。",
			},
			damage: 80,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
