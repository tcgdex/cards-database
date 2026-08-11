import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マリル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "防衛カール",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にマリルにすべてのダメージを与えないようにします。 （攻撃の他の影響はまだ発生しています。）",
			},
		},
		{
			cost: ["Water", "Water"],
			name: {
				'ja-jp': "バブル爆弾",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。テールの場合、マリルはそれ自体に10ダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
