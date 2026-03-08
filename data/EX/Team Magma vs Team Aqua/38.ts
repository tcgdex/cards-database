import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Rhyhorn",
		fr: "Rhinocorne de Team Magma",
		de: "Team Magmas Rihorn"
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
				fr: "Double dégâts",
				de: "Double Damage"
			},
			effect: {
				en: "Does 10 damage to each Defending Pokémon.",
				fr: "Inflige 10 dégâts à chaque Pokémon Défenseur.",
				de: "Does 10 damage to each Defending Pokémon."
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
				fr: "Ruée de corne",
				de: "Horn Rush"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Flip a coin. If tails, this attack does nothing."
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276015,
		tcgplayer: 89842
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
