import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [702],

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Tail Trickery",
				'fr-fr': "Queue Étourdissante",
				'es-es': "Cola Engaño",
				'it-it': "Confondicoda",
				'pt-br': "Truques de Cauda",
				'de-de': "Schweiftrick"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its upper whiskers are sensors that survey its surroundings. Its lower whiskers are organs that shoot electricity."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511805,
				tcgplayer: 226485
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511805,
				tcgplayer: 226485
			}
		},
	],
}

export default card
