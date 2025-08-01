import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Stadium Nav",
		fr: "Navigateur de Stade",
		es: "Navegador Estadio",
		it: "Navigatore Stadio",
		pt: "Navegador de Estádio",
		de: "Stadion-Navi"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 2 pièces. Pour chaque côté face, cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		en: "Flip 2 coins. For each heads, search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
		es: "Lanza 2 monedas. Por cada cara, busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Lancia due volte una moneta. Ogni volta che esce testa, cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Jogue 2 moedas. Para cada cara, procure por 1 carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Wirf 2 Münzen. Durchsuche pro Kopf dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 388827
	}
}

export default card
