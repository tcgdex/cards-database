import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		605,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Weak Barrier",
				'fr-fr': "Bouclier Faiblesse",
			},
			effect: {
				'en-us': "If this Pokémon has any Psychic Energy attached to it, this Pokémon has no Weakness.",
				'fr-fr': "Si de l'Énergie Psychic est attachée à ce Pokémon, ce Pokémon n'a pas de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Blow",
				'fr-fr': "Coup d'Poing Éclair",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "It uses its strong psychic power to squeeze its opponent's brain, causing unendurable headaches.",
	},
}

export default card
