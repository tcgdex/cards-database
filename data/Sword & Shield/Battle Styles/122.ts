import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Camping Gear",
		fr: "Kit de Camping",
		es: "Kit de Acampada",
		it: "Kit da campeggio",
		pt: "Equipamento de Camping",
		de: "Camping-Set"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for a card and put it into your hand. Then, shuffle your deck. Your turn ends.",
		fr: "Cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Votre tour se termine.",
		es: "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja. Tu turno termina.",
		it: "Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Il tuo turno finisce.",
		pt: "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho. O seu turno acaba.",
		de: "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck. Dein Zug endet."
	},

	trainerType: "Item",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card