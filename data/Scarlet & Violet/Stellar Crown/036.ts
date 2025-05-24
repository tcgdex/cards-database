import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Lumineon",
		fr: "Luminéon",
		es: "Lumineon",
		it: "Lumineon",
		pt: "Lumineon",
		de: "Lumineon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Return",
			fr: "Retour",
			es: "Retribución",
			it: "Ritorno",
			pt: "Retorno",
			de: "Rückkehr"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			es: "Aleta Afilada",
			it: "Pinnalama",
			pt: "Barbatana Cortante",
			de: "Rasierflosse"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shigenori Negishi"
}

export default card
