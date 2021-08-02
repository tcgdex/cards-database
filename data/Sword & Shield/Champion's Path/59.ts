import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		es: "Poké Ball",
		it: "Poké Ball",
		pt: "Poké Bola",
		de: "Pokéball"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Lancez une pièce. Si c’est face, cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		es: "Lanza una moneda. Si sale cara, busca en tu mazo un Pokémon, enséñaselo a tu rival y ponlo en tu mano. Baraja tu mazo después.",
		it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo al tuo avversario e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Lance uma moeda. Se der “cara”, procure um Pokémon no seu deck, mostre-o ao seu oponente e coloque-o na sua mão. Em seguida, embaralhe seu deck.",
		de: "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
