import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		en: "Celebi V",
		fr: "Celebi V",
		es: "Celebi V",
		it: "Celebi V",
		pt: "Celebi V",
		de: "Celebi V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leaflet Dance"
		},

		effect: {
			en: "Attach any number of Grass Energy cards from your hand to your Pokémon in any way you like."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Slash Back"
		},

		damage: 60,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
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