import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [535],

	name: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spiral Attack",
				'fr-fr': "Attaque en Spirale",
				'es-es': "Ataque en Espiral",
				'it-it': "Spiralattacco",
				'pt-br': "Ataque Espiral",
				'de-de': "Spiralangriff"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Water"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Graceful ripples running across the water's surface are a sure sign that Tympole are singing in high-pitched voices below."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457663,
				tcgplayer: 213123
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457663,
				tcgplayer: 213123
			}
		},
	],
}

export default card
