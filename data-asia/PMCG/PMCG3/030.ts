import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ハンター",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [93],
	hp: 50,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "透明性",
			},
			effect: {
				ja: "攻撃がハンターに何かをするときはいつでも、コインをひっくり返します。頭の場合は、ダメージを含む、その攻撃のすべての影響をhaunterに行うことを防ぎます。このパワーは機能しなくなり、ハンターは特別な状態の影響を受けます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "悪夢",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
