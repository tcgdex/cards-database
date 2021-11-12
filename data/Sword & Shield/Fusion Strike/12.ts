import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		it: "Maractus",
		pt: "Maractus",
		de: "Maracamba"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		en: "Once each year, this Pokémon scatters its seeds. They're jam-packed with nutrients, making them a precious food source out in the desert."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Peck"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Ditch and Shake"
		},

		damage: "50×",

		effect: {
			en: "Discard any number of Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way."
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