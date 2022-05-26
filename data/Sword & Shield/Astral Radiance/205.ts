import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Kamado",
		fr: "Cormier",
		es: "Sorbus",
		it: "Soruan",
		pt: "Sorbus",
		de: "Denboku"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Choose a card in your hand, and discard the other cards. If you do, draw 4 cards. (If you have no other cards in your hand, you can't use this card.)",
		fr: "Choisissez une carte dans votre main et défaussez les autres cartes. Dans ce cas, piochez 4 cartes. (Si vous n'avez pas d'autres cartes en main, vous ne pouvez pas utiliser cette carte.)",
		es: "Elige 1 carta de tu mano y descarta el resto de las cartas. Si lo haces, roba 4 cartas. (Si no tienes otras cartas en tu mano, no puedes usar esta carta).",
		it: "Scegli una carta che hai in mano e scarta le altre carte. Se lo fai, pesca quattro carte. Se non hai altre carte in mano, non puoi usare questa carta.",
		pt: "Escolha 1 carta na sua mão e descarte as outras cartas. Se fizer isto, compre 4 cartas (se você não tiver nenhuma outra carta na sua mão, não poderá usar esta carta).",
		de: "Wähle 1 Karte auf deiner Hand und lege die anderen Karten auf deinen Ablagestapel. Wenn du das machst, ziehe 4 Karten. (Wenn du keine anderen Karten auf deiner Hand hast, kannst du diese Karte nicht verwenden.)"
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card