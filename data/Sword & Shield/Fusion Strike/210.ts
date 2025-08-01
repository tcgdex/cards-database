import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		en: "It shows its cute side by chasing its own tail until it gets dizzy."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Whimsy Tackle",
			fr: "Charge Bizarre",
			de: "Launischer Tackle",
			es: "Placaje Caprichoso",
			pt: "Investida Fantástica",
			it: "Capriccioazione"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582946
	}
}

export default card