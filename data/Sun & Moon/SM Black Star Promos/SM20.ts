import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		750,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Enhanced Stomp",
				fr: "Piétinement Amélioré",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "High Horsepower",
				fr: "Cavalerie Lourde",
			},
			effect: {
				en: "This Pokémon does 40 damage to itself.",
				fr: "Ce Pokémon s’inflige 40 dégâts.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
