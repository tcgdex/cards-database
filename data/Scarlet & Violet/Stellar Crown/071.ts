import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Boulder",
		fr: "Roc-de-Fer",
		es: "Ferromole",
		it: "Massoferreo",
		pt: "Rocha Férrea",
		de: "Eisenfels"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Adjusted Horn",
			fr: "Corne Ajustée",
			es: "Cuerno Graduable",
			it: "Equicorno",
			pt: "Chifre Ajustado",
			de: "Angepasstes Horn"
		},

		effect: {
			en: "If you don't have the same number of cards in your hand as your opponent, this attack does nothing.",
			fr: "Si vous n'avez pas le même nombre de cartes dans votre main que votre adversaire, cette attaque ne fait rien.",
			es: "Si no tienes la misma cantidad de cartas en tu mano que tu rival, este ataque no hace nada.",
			it: "Se non hai lo stesso numero di carte in mano del tuo avversario, questo attacco non ha effetto.",
			pt: "Se você não tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque não fará nada.",
			de: "Wenn du nicht genauso viele Karten auf der Hand hast wie dein Gegner, hat diese Attacke keine Auswirkungen."
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "GIDORA",

	thirdParty: {
		cardmarket: 785925
	}
}

export default card
