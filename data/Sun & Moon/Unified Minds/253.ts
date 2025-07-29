import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Reset Stamp",
		fr: "Tampon de Réinitialisation",
		es: "Sello Reinicio",
		it: "Timbro Reset",
		pt: "Carimbo de Recomposição",
		de: "Reset-Stempel"
	},

	illustrator: "sadaji",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Your opponent shuffles their hand into their deck and draws a card for each of their remaining Prize cards.",
		fr: "Votre adversaire mélange sa main avec son deck et pioche une carte pour chacune des cartes Récompense qu’il lui reste.",
		es: "Tu rival pone las cartas de su mano en su baraja y las baraja todas, y roba 1 carta por cada una de las cartas de Premio que le queden.",
		it: "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e pesca una carta per ciascuna delle sue carte Premio rimanenti.",
		pt: "Seu oponente embaralha a própria mão no baralho dele(a) e compra 1 carta para cada uma das cartas de Prêmio restantes dele(a).",
		de: "Dein Gegner mischt seine Handkarten in sein Deck und zieht 1 Karte für jede seiner verbleibenden Preiskarten."
	},

	thirdParty: {
		cardmarket: 388817
	}
}

export default card
