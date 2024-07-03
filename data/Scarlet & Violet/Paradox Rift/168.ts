import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Norman",
		fr: "Norman",
		es: "Norman",
		it: "Norman",
		pt: "Norman",
		de: "Norman"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If your opponent's Active Pokémon is a Pokémon ex, draw 2 more cards.",
		fr: "Piochez 2 cartes. Si le Pokémon Actif de votre adversaire est un Pokémon-ex, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Si el Pokémon Activo de tu rival es un Pokémon ex, roba 2 cartas más.",
		it: "Pesca due carte. Se il Pokémon attivo del tuo avversario è un Pokémon-ex, pesca altre due carte.",
		pt: "Compre 2 cartas. Se o Pokémon Ativo do seu oponente for um Pokémon ex, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card