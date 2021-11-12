import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Eldegoss",
		fr: "Blancoton",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Gossifleur",
		fr: "Tournicoton",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sunny Wind"
		},

		damage: 50,

		effect: {
			en: "Heal 20 damage from this Pokémon."
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