import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
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
				'en-us': "Fiddle Around",
				'fr-fr': "Bidouillage",
				'es-es': "Juguetear",
				'it-it': "Perditempo",
				'pt-br': "Desordenar",
				'de-de': "Herumtüfteln"
			},
			effect: {
				'en-us': "Look at the top 3 cards of your opponent's deck and put them back in any order.",
				'fr-fr': "Regardez les 3 cartes du dessus du deck de votre adversaire et replacez-les dans l'ordre de votre choix.",
				'es-es': "Mira las 3 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				'it-it': "Guarda le prime tre carte del mazzo del tuo avversario e rimettile a posto nell'ordine che preferisci.",
				'pt-br': "Olhe os 3 cards de cima do baralho do seu oponente e coloque-os de volta em qualquer ordem.",
				'de-de': "Schau dir die obersten 3 Karten des gegnerischen Decks an und lege sie in beliebiger Reihenfolge zurück in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Jab",
				'fr-fr': "Coup d'Queue",
				'es-es': "Puya Cola",
				'it-it': "Stoccacoda",
				'pt-br': "Sova de Cauda",
				'de-de': "Schweifstoß"
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
		'en-us': "Its tail is so powerful that it can use it to grab a tree branch and hold itself up in the air.",
	},

	thirdParty: {
		cardmarket: 291650,
		tcgplayer: 121216
	}
}

export default card
