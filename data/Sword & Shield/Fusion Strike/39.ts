import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Chandelure V",
		fr: "Lugulabre V",
		es: "Chandelure V",
		it: "Chandelure V",
		pt: "Chandelure V",
		de: "Skelabra V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Saki Hayashiro",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Confuse Ray"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Poltergeist"
		},

		damage: "40×",

		effect: {
			en: "Your opponent reveals their hand. This attack does 40 damage for each Trainer card you find there."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
