import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Tsareena V",
		fr: "Sucreine V",
		es: "Tsareena V",
		it: "Tsareena V",
		pt: "Tsareena V",
		de: "Fruyal V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Queen's Orders"
		},

		damage: "20+",

		effect: {
			en: "You may discard any number of your Benched Pokémon. This attack does 40 more damage for each Benched Pokémon you discarded in this way."
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
