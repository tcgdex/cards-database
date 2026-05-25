import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Special Red Card",
		fr: "Carton Rouge Spécial",
		es: "Tarjeta Roja Especial",
		'es-mx': "Tarjeta Roja Especial",
		de: "Spezielle Rote Karte",
		it: "Cartelrosso Speciale",
		pt: "Cartão Vermelho Especial"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693547
	},

	effect: {
		en: "You can use this card only if your opponent has 3 or fewer Prize cards remaining.\n\nYour opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 3 cards.",
		fr: "Vous ne pouvez utiliser cette carte que s'il reste 3 cartes Récompense ou moins à votre adversaire.\n\nVotre adversaire mélange sa main, puis la place en dessous de son deck. Si au moins une carte est placée en dessous de son deck de cette façon, votre adversaire pioche 3 cartes.",
		es: "Puedes usar esta carta solo si a tu rival le quedan 3 cartas de Premio o menos.\n\nTu rival baraja las cartas de su mano y las pone en la parte inferior de su baraja. Si pone alguna carta en la parte inferior de su baraja de esta manera, tu rival roba 3 cartas.",
		'es-mx': "Solo puedes usar esta carta si a tu rival le quedan 3 cartas de Premio o menos.\n\nTu rival baraja su mano y la pone en la parte inferior de su mazo. Si puso alguna carta en la parte inferior de su mazo de esta manera, tu rival roba 3 cartas.",
		de: "Du kannst diese Karte nur einsetzen, wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat.\n\nDein Gegner mischt seine Handkarten und legt sie unter sein Deck. Wenn er auf diese Weise mindestens 1 Karte unter sein Deck gelegt hat, zieht er 3 Karten.",
		it: "Puoi usare questa carta solo se il tuo avversario ha tre o meno carte Premio rimanenti.\n\nIl tuo avversario rimischia le carte che ha in mano e le mette in fondo al proprio mazzo. Se mette delle carte in fondo al proprio mazzo in questo modo, il tuo avversario pesca tre carte.",
		pt: "Você só poderá usar esta carta se o seu oponente tiver 3 ou menos cartas de Prêmio restantes.\n\nSeu oponente embaralha a mão dele e a coloca como as cartas de baixo do baralho dele. Se o seu oponente colocar quaisquer cartas como as cartas de baixo do baralho dele desta forma, ele comprará 3 cartas."
	}
}

export default card