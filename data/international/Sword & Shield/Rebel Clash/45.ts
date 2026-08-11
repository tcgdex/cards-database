import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [536],

	name: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twirling Sign",
				'fr-fr': "Signe Virevoltant",
				'es-es': "Señal Pirueta",
				'it-it': "Segnale Roteante",
				'pt-br': "Sinal Espiral",
				'de-de': "Kreiselndes Schild"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 90,
	types: ["Water"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It weakens its prey with sound waves intense enough to cause headaches, then entangles them with its sticky tongue."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457668,
				tcgplayer: 213124
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457668,
				tcgplayer: 213124
			}
		},
	],
}

export default card
