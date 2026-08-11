import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d'esprit",
				'de-de': "Gedankenverbiegung"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 40,

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
		'en-us': "It is told in mythology that this Pokémon was born before the universe even existed."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83598
			}
		}
	]
}

export default card
