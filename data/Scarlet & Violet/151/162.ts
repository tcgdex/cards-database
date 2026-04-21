import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Pince Attrapeuse",
		en: "Grabber",
		es: "Agarrador Mecánico",
		it: "Pinza Afferra-Pokémon",
		pt: "Apanhador",
		de: "Greifarm"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Votre adversaire montre sa main, puis vous placez un Pokémon que vous y trouvez en dessous de son deck.",
		en: "Your opponent reveals their hand, and you put a Pokémon you find there on the bottom of their deck.",
		es: "Tu rival enseña las cartas de su mano, y tú pones 1 Pokémon que encuentres entre ellas en la parte inferior de su baraja.",
		it: "Il tuo avversario mostra le carte che ha in mano e tu metti un Pokémon presente tra esse in fondo al suo mazzo.",
		pt: "Seu oponente revela a mão dele e você coloca um Pokémon que encontrar lá como a carta de baixo do baralho dele.",
		de: "Dein Gegner zeigt dir seine Handkarten und du legst ein Pokémon, das du dort findest, unter sein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "inose yukie",

	thirdParty: {
		cardmarket: 733757
	}
}

export default card