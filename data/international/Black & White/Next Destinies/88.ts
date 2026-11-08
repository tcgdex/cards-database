import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Heavy Ball",
		'fr-fr': "Masse Ball",
		'es-es': "Peso Ball",
		'it-it': "Peso Ball",
		'pt-br': "Bola Pesada",
		'de-de': "Schwerball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez dans votre deck un Pokémon avec un coût de Retraite de 3 ou plus, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Pokémon with a Retreat Cost of 3 or more, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja a un Pokémon con un Coste de Retirada de 3 o más, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo un Pokémon con un costo di ritirata di almeno tre, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure em seu baralho um Pokémon com Custo para Recuar maior ou igual a 3, revele-o e coloque-o na sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon mit Rückzugskosten von 3 oder mehr, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280313,
		tcgplayer: 86056
	}
}

export default card
