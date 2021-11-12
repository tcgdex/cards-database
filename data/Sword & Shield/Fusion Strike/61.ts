import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mantine",
		fr: "Démanta",
		es: "Mantine",
		it: "Mantine",
		pt: "Mantine",
		de: "Mantax"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		en: "As it majestically swims, it doesn't care if Remoraid attach to it to scavenge for its leftovers."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Bounce"
		},

		damage: 20,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wave Splash"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card