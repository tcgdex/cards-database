import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d'Alola",
		es: "Dugtrio de Alola",
		it: "Dugtrio di Alola",
		pt: "Dugtrio de Alola",
		de: "Alola-Digdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Trio-Cheehoo",
			fr: "Trio-Cheehoo",
			es: "Trío Olé",
			it: "Triurrà",
			pt: "Trilegal",
			de: "Dreistes Glück"
		},

		effect: {
			en: "If you don't have exactly 3 cards in your hand, this attack does nothing.",
			fr: "Si vous n'avez pas exactement 3 cartes dans votre main, cette attaque ne fait rien.",
			es: "Si no tienes exactamente 3 cartas en tu mano, este ataque no hace nada.",
			it: "Se non hai esattamente tre carte in mano, questo attacco non ha effetto.",
			pt: "Se você não tiver exatamente 3 cartas na sua mão, este ataque não fará nada.",
			de: "Wenn du nicht genau 3 Karten auf deiner Hand hast, hat diese Attacke keine Auswirkungen."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	}
}

export default card
