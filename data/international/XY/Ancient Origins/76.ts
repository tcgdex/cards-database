import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Level Ball",
		'fr-fr': "Niveau Ball",
		'es-es': "Nivel Ball",
		'it-it': "Level Ball",
		'pt-br': "Bola de Nível",
		'de-de': "Levelball"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez dans votre deck un Pokémon avec 90 PV ou moins, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Pokémon with 90 HP or less, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja 1 Pokémon con 90 PS o menos, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo un Pokémon con un massimo di 90 PS, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure um Pokémon com 90 PS ou menos em seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon mit 90 oder weniger KP, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 284257,
		tcgplayer: 101498
	}
}

export default card
