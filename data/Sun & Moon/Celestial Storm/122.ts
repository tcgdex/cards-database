import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},
	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		352,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unit Color 2",
				fr: "Couleur Unitaire 2",
			},
			effect: {
				en: "As long as this Pokémon has Unit Energy LightningPsychicMetal attached to it, it is a Lightning, Psychic, and Metal Pokémon.",
				fr: "Tant que de l’Énergie Unitaire LightningPsychicMetal est attachée à ce Pokémon, c’est un Pokémon Lightning, Psychic et Metal.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
