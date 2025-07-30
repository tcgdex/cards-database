import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Roxanne",
		fr: "Roxanne",
		es: "Petra",
		it: "Petra",
		pt: "Roxanne",
		de: "Felizia"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can use this card only if your opponent has 3 or fewer Prize cards remaining.\nEach player shuffles their hand into their deck. Then, you draw 6 cards, and your opponent draws 2 cards.",
		fr: "Vous ne pouvez utiliser cette carte que s'il reste 3 cartes Récompense ou moins à votre adversaire.\nChaque joueur mélange sa main avec son deck. Ensuite, vous piochez 6 cartes et votre adversaire pioche 2 cartes.",
		es: "Puedes usar esta carta solo si a tu rival le quedan 3 cartas de Premio o menos.\nCada jugador pone las cartas de su mano en su baraja y las baraja todas. Después, robas 6 cartas, y tu rival roba 2 cartas.",
		it: "Puoi usare questa carta solo se il tuo avversario ha tre o meno carte Premio rimanenti.\nCiascun giocatore rimischia le carte che ha in mano nel proprio mazzo. Poi tu peschi sei carte e il tuo avversario ne pesca due.",
		pt: "Você só pode usar esta carta se o seu oponente tiver 3 ou menos cartas de Prêmio restantes.\nCada jogador embaralha a própria mão no próprio baralho. Em seguida, você compra 6 cartas e o seu oponente compra 2 cartas.",
		de: "Du kannst diese Karte nur verwenden, wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat.\nJeder Spieler mischt seine Handkarten in sein Deck. Anschließend ziehst du 6 Karten und dein Gegner zieht 2 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658811
	}
}

export default card