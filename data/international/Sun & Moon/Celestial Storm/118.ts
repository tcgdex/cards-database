import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'es-es': "Loudred",
		'it-it': "Loudred",
		'pt-br': "Loudred",
		'de-de': "Krakeelo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		294,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cracking Voice",
				'fr-fr': "Super Voix",
				'es-es': "Voz Quebrada",
				'it-it': "Spaccavoce",
				'pt-br': "Voz Demolidora",
				'de-de': "Schriller Schrei"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The shock waves from its cries can tip over trucks. It stamps its feet to power up.",
	},

	thirdParty: {
		cardmarket: 361357,
		tcgplayer: 170976
	}
}

export default card
