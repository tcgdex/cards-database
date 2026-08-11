import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'de-de': "Piepi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gesture",
				'fr-fr': "Geste",
				'de-de': "Geste"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				'fr-fr': "Choisissez un des Pokémon du Banc de votre adversaire et échangez-le avec le Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "Tausche 1 Verteidigendes Pokémon gegen 1 der Pokémon auf der Bank deines Geners aus. Dein Gegner wählt aus, welches Verteidigende Pokémon getauscht wird."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Moon Kick",
				'fr-fr': "Coup d'pied lunaire",
				'de-de': "Mondkick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276235,
				tcgplayer: 84354
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276235,
				tcgplayer: 84354
			},
		},
	],
}

export default card
