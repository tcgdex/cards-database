import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'de-de': "Arktos"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Find Ice",
				'fr-fr': "Chercheur de Glace",
				'es-es': "Encontrar Hielo",
				'it-it': "Trovaghiaccio",
				'pt-br': "Encontrar Gelo",
				'de-de': "Eis finden"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 3 cartes Énergie Water dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas de Energía Water, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia Water, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure no seu baralho até 3 cards de Energia Water, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Water-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Freezing Wind",
				'fr-fr': "Vent Glaçant",
				'es-es': "Viento Gélido",
				'it-it': "Ventogelido",
				'pt-br': "Vento Gelado",
				'de-de': "Polarwind"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
	},

	thirdParty: {
		cardmarket: 282684,
		tcgplayer: 98052
	}
}

export default card
