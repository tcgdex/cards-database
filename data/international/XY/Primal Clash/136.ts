import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Repeat Ball",
		'fr-fr': "Bis Ball",
		'es-es': "Acopio Ball",
		'it-it': "Bis Ball",
		'pt-br': "Bola da Repetição",
		'de-de': "Wiederball"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez dans votre deck un Pokémon du même nom que l'un de vos Pokémon en jeu, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Pokémon with the same name as 1 of your Pokémon in play, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja 1 Pokémon con el mismo nombre que 1 de tus Pokémon en juego, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo un Pokémon con lo stesso nome di uno dei tuoi Pokémon in gioco, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure em seu baralho um Pokémon com o mesmo nome de 1 de seus Pokémon em jogo, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon mit demselben Namen wie 1 deiner Pokémon im Spiel, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 273667,
		tcgplayer: 96034
	}
}

export default card
