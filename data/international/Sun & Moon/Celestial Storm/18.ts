import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Illumise",
		'fr-fr': "Lumivole",
		'es-es': "Illumise",
		'it-it': "Illumise",
		'pt-br': "Illumise",
		'de-de': "Illumise"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		314,
	],

	hp: 70,

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
				'en-us': "Pheromone Signals",
				'fr-fr': "Signaux de Phéromones",
				'es-es': "Señales Feromona",
				'it-it': "Segnali Feromonici",
				'pt-br': "Sinais de Feromônio",
				'de-de': "Pheromon-Signale"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	description: {
		'en-us': "With its sweet aroma, it guides Volbeat to draw signs with light in the night sky.",
	},

	thirdParty: {
		cardmarket: 361265,
		tcgplayer: 170828
	}
}

export default card
