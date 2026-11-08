import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [574],

	name: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
		'es-es': "Gothita",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'de-de': "Mollimorba"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
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
				'en-us': "Look at the top 5 cards of your opponent's deck and put them back in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck de votre adversaire, puis replacez-les dans l'ordre de votre choix.",
				'es-es': "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				'it-it': "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile a posto nell'ordine che preferisci.",
				'pt-br': "Olhe as 5 cartas de cima do baralho do seu oponente e coloque-as de volta em qualquer ordem.",
				'de-de': "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Gentle Slap",
				'fr-fr': "Gifle Douce",
				'es-es': "Bofetada Gentil",
				'it-it': "Schiaffetto",
				'pt-br': "Tapinha",
				'de-de': "Sanfter Hieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Though they're still only babies, there's psychic power stored in their ribbonlike feelers, and sometimes they use that power to fight."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483244,
				tcgplayer: 219449
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483244,
				tcgplayer: 219449
			}
		},
	],
}

export default card
