import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Zapétrel",
		en: "Wattrel",
		es: "Wattrel",
		it: "Wattrel",
		pt: "Wattrel",
		de: "Voltrel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Vent Dévastateur",
			en: "Devastating Wind",
			es: "Viento Devastador",
			it: "Devastavento",
			pt: "Vento Devastador",
			de: "Wind der Verwüstung"
		},

		effect: {
			fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
			en: "Your opponent shuffles their hand into their deck and draws 4 cards.",
			es: "Tu rival pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
			it: "Il tuo avversario rimischia le carte che ha in mano nel suo mazzo e pesca quattro carte.",
			pt: "Seu oponente embaralha a mão dele no baralho dele e compra 4 cartas.",
			de: "Dein Gegner mischt seine Handkarten in sein Deck und zieht 4 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Battement",
			en: "Flap",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card