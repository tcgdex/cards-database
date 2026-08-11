import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [415],
	set: Set,

	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Honey Courier",
			'fr-fr': "Coursier Miel",
			'es-es': "Repartidor de Miel",
			'it-it': "Corriere di Miele",
			'pt-br': "Correio de Mel",
			'de-de': "Honigkurier"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The members of the trio spend all their time together. Each one has a slightly different taste in nectar.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658503,
				tcgplayer: 272211
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658503,
				tcgplayer: 272211
			}
		},
	],
}

export default card
