import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		es: "Poké Ball",
		de: "Pokéball",
		it: "Poké Ball",
		pt: "Poké Bola"
	},
	set: Set,
	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",
	illustrator: "Studio Bora Inc.",
	effect: {
		en: "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
		it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
		pt: "Jogue uma moeda. Se sair cara, procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
	},
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684321,
		cardmarket: 877497
	}
}

export default card
