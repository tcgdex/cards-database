import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'es-es': "Trapinch",
		'it-it': "Trapinch",
		'pt-br': "Trapinch",
		'de-de': "Knacklion"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		328,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nest Building",
				'fr-fr': "Nidification",
				'es-es': "Construcción Nido",
				'it-it': "Costruzione della Tana",
				'pt-br': "Construindo Ninhos",
				'de-de': "Nestbau"
			},
			effect: {
				'en-us': "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Spray",
				'fr-fr': "Jet Sableux",
				'es-es': "Rociado de Arena",
				'it-it': "Silicospruzzo",
				'pt-br': "Spray de Areia",
				'de-de': "Sandspray"
			},

			damage: 10,

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
		'en-us': "Its jaws are strong enough to crush rocks but so heavy that it can't get up if it flips over. Sandile seize those moments as their chance.",
	},

	thirdParty: {
		cardmarket: 408179,
		tcgplayer: 201136
	}
}

export default card
