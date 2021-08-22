import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Focus Fist",
			fr: "Poing Concentré",
			es: "Puño Infalible",
			it: "Concentrapugno",
			pt: "Punho Focalizado",
			de: "Fokussierfaust"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey."
	}
}

export default card