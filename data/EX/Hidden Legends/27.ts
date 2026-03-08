import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
		de: "Tropius"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Fruition",
				fr: "Concrétisation",
				de: "Fruition"
			},
			effect: {
				en: "Move 1 Energy card attached to Tropius to another of your Pokémon and remove 4 damage counters from that Pokémon (all if there are less than 4).",
				fr: "Déplacez 1 carte Énergie attachée à Tropius sur un autre de vos Pokémon et retirez à ce Pokémon 4 marqueurs de dégât (retirez-les lui tous s'il en a moins de 4).",
				de: "Move 1 Energy card attached to Tropius to another of your Pokémon and remove 4 damage counters from that Pokémon (all if there are less than 4)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Gust"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276101,
		tcgplayer: 90057
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
