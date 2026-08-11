import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "c",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "チェイス[チェイス]",
			},
			effect: {
				'ja-jp': "[c]がアクティブなポクモンである限り、相手のアクティブなポクモンが退却しようとするたびに、コインをひっくり返します。頭の場合は、そのポクモンに1つのダメージカウンターを入れます。衰弱と抵抗を適用します。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "隠された力",
			},
			damage: 10,
		},
	],

	retreat: 1,

};

export default card
