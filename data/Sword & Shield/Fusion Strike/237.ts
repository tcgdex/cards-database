import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
		es: "Veloz Ball",
		it: "Velox Ball",
		pt: "Bola Rápida",
		de: "Flottball"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only if you discard another card from your hand.\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main.\nCherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		es: "Puedes jugar esta carta solo si descartas otra carta de tu mano.\nBusca en tu baraja 1 Pokémon Básico, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Puoi giocare questa carta solo se scarti un'altra carta che hai in mano.\nCerca nel tuo mazzo un Pokémon Base, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Você só pode jogar esta carta se descartar outra carta da sua mão.\nProcure por 1 Pokémon Básico no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Du kannst diese Karte nur spielen, wenn du 1 andere Karte aus deiner Hand auf deinen Ablagestapel legst.\nDurchsuche dein Deck nach 1 Basis-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",
	illustrator: "Ryo Ueda",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582973,
		tcgplayer: 253112
	}
}

export default card