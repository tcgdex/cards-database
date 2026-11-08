import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
		'es-es': "Mudkip",
		'it-it': "Mudkip",
		'pt-br': "Mudkip",
		'de-de': "Hydropi"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		258,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Water Reserve",
				'fr-fr': "Réserve d’Eau",
				'es-es': "Reserva de Agua",
				'it-it': "Riserva Idrica",
				'pt-br': "Reservatório de Água",
				'de-de': "Wasserreserve"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 cartes Énergie Water dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas de Energía Water, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia Water, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas de Energia Water no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Water-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To alert it, the fin on its head senses the flow of water. It has the strength to heft boulders.",
	},

	thirdParty: {
		cardmarket: 361279,
		tcgplayer: 170849
	}
}

export default card
