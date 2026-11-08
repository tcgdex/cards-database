import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 60,

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
				'en-us': "Data Check",
				'fr-fr': "Vérification de Données",
				'es-es': "Comprobación de Datos",
				'it-it': "Controllo Dati",
				'pt-br': "Verificação de Dados",
				'de-de': "Datenprüfung"
			},
			effect: {
				'en-us': "Look through your deck. Shuffle your deck afterward.",
				'fr-fr': "Parcourez votre deck. Mélangez ensuite votre deck.",
				'es-es': "Examina las cartas de tu baraja. Baraja las cartas de tu baraja después.",
				'it-it': "Guarda e poi rimischia le carte del tuo mazzo.",
				'pt-br': "Consulte o seu baralho. Em seguida, embaralhe seus cards.",
				'de-de': "Sieh dir die Karten deines Decks an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'es-es': "Afilar",
				'it-it': "Affilatore",
				'pt-br': "Afiar",
				'de-de': "Schärfer"
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

	description: {
		'en-us': "A Pokémon that consists entirely of programming code. It is capable of moving freely in cyberspace.",
	},

	thirdParty: {
		cardmarket: 284245,
		tcgplayer: 101486
	}
}

export default card
