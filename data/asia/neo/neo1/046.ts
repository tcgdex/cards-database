import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "natu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [177],
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ペック",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "テレキネシス",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
