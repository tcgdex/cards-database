import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "hなしh",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ヘルプ[ヘルプ]",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、[H]、[e]、[e]、[l]、および[p]がベンチで[p]がない場合は、手をシャッフルして、同じ数のカードの新しい手を描くことができます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "隠された力",
			},
			damage: 10,
		},
	],

	retreat: 1,

};

export default card
