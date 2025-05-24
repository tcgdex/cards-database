import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		de: "Pokéball",
		es: "Poké Ball",
		pt: "Poké Bola",
		it: "Poké Ball"
	},

	rarity: "None",
	category: "Trainer",
	types: ["Lightning"],

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		de: "Wirf 1 Münze. Durchsuche bei \"Kopf\" dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck.",
		es: "Lanza una moneda. Si sale cara, busca en tu mazo un Pokémon, enséñaselo a tu rival y ponlo en tu mano. Baraja tu mazo después.",
		pt: "Lance uma moeda. Se der \"cara\", procure um Pokémon no seu deck, mostre-o ao seu oponente e coloque-o na sua mão. Em seguida, embaralhe seu deck.",
		it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo al tuo avversario e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		en: "Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},

	trainerType: "Item"
}

export default card