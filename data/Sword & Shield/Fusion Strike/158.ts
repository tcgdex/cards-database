import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar V",
		fr: "Tyranocif V",
		es: "Tyranitar V",
		it: "Tyranitar V",
		pt: "Tyranitar V",
		de: "Despotar V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	retreat: 4,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Hammer In"
		},

		damage: 80
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			en: "Land Crush"
		},

		damage: 150
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
