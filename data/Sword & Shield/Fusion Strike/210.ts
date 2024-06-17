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
			en: "Whimsy Tackle"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card