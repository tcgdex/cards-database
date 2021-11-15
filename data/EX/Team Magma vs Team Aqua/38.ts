import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Rhyhorn",
		fr: "Rhinocorne de Team Magma"
	},
	illustrator: "Mt. TBT",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		111,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Damage",
				fr: "Double dégâts"
			},
			effect: {
				en: "Does 10 damage to each Defending Pokémon.",
				fr: "Inflige 10 dégâts à chaque Pokémon Défenseur."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Rush",
				fr: "Ruée de corne"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
