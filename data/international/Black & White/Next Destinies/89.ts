import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Level Ball",
		'fr-fr': "Niveau Ball",
		'es-es': "Nivel Ball",
		'it-it': "Level Ball",
		'pt-br': "Bola de Nível",
		'de-de': "Levelball"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez dans votre deck un Pokémon avec 90 PV ou moins, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Pokémon with 90 HP or less, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja a un Pokémon con 90 PV o menos, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo un Pokémon con un massimo di 90 PV, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure em seu baralho um Pokémon com PS igual ou inferior a 90, revele-o e coloque-o na sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon mit 90 oder weniger KP, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280314,
		tcgplayer: 86710
	}
}

export default card
