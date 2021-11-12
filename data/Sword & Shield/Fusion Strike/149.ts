import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mina Nakai",

	description: {
		en: "Wanting to make sure it's taken seriously, Pancham's always giving others a glare. But if it's not focusing, it ends up smiling."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Raised Bad"
		},

		effect: {
			en: "Search your deck for up to 2 Darkness Energy cards and attach them to this Pokémon. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Smash Kick"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card