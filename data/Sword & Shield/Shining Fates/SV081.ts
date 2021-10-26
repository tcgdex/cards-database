import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Goupilou",
		en: "Nickit",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Provocation",
			en: "Instigate",
			es: "Instigar",
			it: "Istigazione",
			pt: "Instigar",
			de: "Anzetteln"
		},

		effect: {
			fr: "Votre adversaire mélange sa main, puis la place en dessous de son deck. S'il place ainsi au moins une carte en dessous de son deck, il pioche 3 cartes.",
			en: "Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 3 cards.",
			es: "Tu rival baraja las cartas de su mano y las pone en la parte inferior de su baraja. Si pone alguna carta en la parte inferior de su baraja de esta manera, tu rival roba 3 cartas.",
			it: "Il tuo avversario rimischia le carte che ha in mano e le mette in fondo al suo mazzo. Se mette delle carte in fondo al suo mazzo in questo modo, il tuo avversario pesca tre carte.",
			pt: "Seu oponente embaralha a própria mão e a coloca como as cartas de baixo do baralho dele(a). Se o seu oponente colocar qualquer carta como a carta de baixo do baralho dele(a) desta forma, ele(a) comprará 3 cartas.",
			de: "Dein Gegner mischt seine Handkarten und legt sie unter sein Deck. Wenn er auf diese Weise mindestens 1 Karte unter sein Deck gelegt hat, zieht er 3 Karten."
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains."
	}
}

export default card
