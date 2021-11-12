import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		en: "It washes its face regularly to keep the coin on its forehead spotless. It doesn't get along with Galarian Meowth."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pay Day"
		},

		damage: 10,

		effect: {
			en: "Draw a card."
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