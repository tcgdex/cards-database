import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Energy Spinner",
		'fr-fr': "Spinner d’Énergie",
		'es-es': "Peonza de Dedos Energética",
		'it-it': "Spinner Energetico",
		'pt-br': "Inquieteco de Energias",
		'de-de': "Energie-Spinner"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez une carte Énergie de base dans votre deck, montrez-la, puis ajoutez-la à votre main. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 cartes Énergie de base au lieu d’une. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a basic Energy card, reveal it, and put it into your hand. If you go second and it’s your first turn, search for up to 3 basic Energy cards instead of 1. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Si sales segundo y es tu primer turno, busca hasta 3 cartas de Energía Básica en vez de 1. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila alle carte che hai in mano. Se inizi per secondo e se è il tuo primo turno, cerca fino a tre carte Energia base invece di una. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por 1 carta de Energia básica no seu baralho, revele-a e coloque-a na sua mão. Se você for o segundo a jogar e esta for a sua primeira vez de jogar, procure por até 3 cartas de Energia básica ao invés de 1. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, durchsuche dein Deck nach bis zu 3 Basis-Energiekarten anstelle von 1 Basis-Energiekarte. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 372455,
		tcgplayer: 189271
	}
}

export default card
