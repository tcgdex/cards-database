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

	dexId: [111],

	hp: 50,

	types: [
		"Fighting"
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
				de: "Doppelschaden"
			},
			effect: {
				en: "Does 10 damage to each Defending Pokémon.",
				fr: "Inflige 10 dégâts à chaque Pokémon Défenseur.",
				de: "Fügt allen Verteidigenden Pokémon 10 Schadenspunkte zu."
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
				de: "Rammhorn"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275815,
				tcgplayer: 89842
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275815,
				tcgplayer: 89842
			}
		},
	],

}

export default card
