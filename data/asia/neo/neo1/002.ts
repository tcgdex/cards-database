import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [152],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				ja: "デフレクター",
			},
			effect: {
				ja: "対戦相手の次のターン中、チコリータがダメージを受けるときはいつでも、そのダメージを半分に分けます（最も近い10に丸められます）。 （他の効果はまだ発生します。）",
			},
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
