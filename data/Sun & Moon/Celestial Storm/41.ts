import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		366,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Evolutionary Advantage",
				fr: "Avantage Évolutif",
			},
			effect: {
				en: "If you go second, this Pokémon can evolve during your first turn.",
				fr: "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sparkling Pearl",
				fr: "Perle Étincelante",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
