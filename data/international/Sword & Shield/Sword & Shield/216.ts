import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Quick Ball",
		'fr-fr': "Rapide Ball",
		'es-es': "Veloz Ball",
		'it-it': "Velox Ball",
		'pt-br': "Bola Rápida",
		'de-de': "Flottball"
	},

	illustrator: "sadaji",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play this card only if you discard another card from your hand.\n\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main.\n\nCherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Puedes jugar esta carta solo si descartas otra carta de tu mano.\n\nBusca en tu baraja 1 Pokémon Básico, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Puoi giocare questa carta solo se scarti un'altra carta che hai in mano.\n\nCerca nel tuo mazzo un Pokémon Base, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Você só pode jogar esta carta se descartar outra carta da sua mão.\n\nProcure por 1 Pokémon Básico no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du 1 andere Karte aus deiner Hand auf deinen Ablagestapel legst.\n\nDurchsuche dein Deck nach 1 Basis-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 439518,
		tcgplayer: 208512
	}
}

export default card
