import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stomp Off",
				'fr-fr': "Tohu-Bohu",
				'es-es': "Pisotear",
				'it-it': "Pestatura",
				'pt-br': "Sair Irritado",
				'de-de': "Davonstapfen"
			},
			effect: {
				'en-us': "Discard the top 2 cards of your opponent's deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
				'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
				'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
				'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente.",
				'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land Crush",
				'fr-fr': "Écras'Terre",
				'es-es': "Aterrizaje",
				'it-it': "Schiacciaterra",
				'pt-br': "Aperto de Terra",
				'de-de': "Schollenbrecher"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles."
	},

	dexId: [111],

	thirdParty: {
		cardmarket: 436599,
		tcgplayer: 208406
	}
}

export default card
