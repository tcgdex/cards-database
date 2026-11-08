import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		'fr-fr': "Axoloto de Paldea",
		'en-us': "Paldean Wooper",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Recherche de Foyer",
			'en-us': "Find a Home",
			'es-es': "Buscar un Hogar",
			'it-it': "Trovadimora",
			'pt-br': "Encontrar um Lar",
			'de-de': "Finde ein Zuhause"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Stade, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715696,
				tcgplayer: 497624,
				cardtrader: 248873
			}
		},
	],

	illustrator: "Miki Tanaka",

	description: {
		'en-us': "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},
}

export default card
