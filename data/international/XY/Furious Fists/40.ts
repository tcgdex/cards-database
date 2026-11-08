import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
		'es-es': "Gothita",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'de-de': "Mollimorba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fortunate Eye",
				'fr-fr': "Regard Chanceux",
				'es-es': "Ojo Fortuito",
				'it-it': "Fortunocchio",
				'pt-br': "Olho da Sorte",
				'de-de': "Flüchtiger Glücksblick"
			},
			effect: {
				'en-us': "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l'ordre de votre choix.",
				'es-es': "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				'it-it': "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile in cima al suo mazzo nell'ordine che preferisci.",
				'pt-br': "Olhe os 5 cards de cima do baralho do seu oponente e coloque-os de volta em cima do baralho do seu oponente em qualquer ordem.",
				'de-de': "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
				'es-es': "Palmetazo",
				'it-it': "Schiaffo",
				'pt-br': "Estalo",
				'de-de': "Klatscher"
			},

			damage: 30,

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
		'en-us': "Starlight is the source of their power. At night, they mark star positions by using psychic power to float stones.",
	},

	thirdParty: {
		cardmarket: 281704,
		tcgplayer: 92215
	}
}

export default card
