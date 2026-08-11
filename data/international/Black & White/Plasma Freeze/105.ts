import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Team Plasma Ball",
		'fr-fr': "Team Plasma Ball",
		'es-es': "Poké Ball del Equipo Plasma",
		'it-it': "Team Plasma Ball",
		'pt-br': "Bola da Equipe Plasma",
		'de-de': "Team-Plasma-Ball"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez un Pokémon de la Team Plasma dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Team Plasma Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja a un Pokémon del Equipo Plasma, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo un Pokémon Team Plasma, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure um Pokémon da Equipe Plasma em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Team-Plasma-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280983,
		tcgplayer: 89848
	}
}

export default card
