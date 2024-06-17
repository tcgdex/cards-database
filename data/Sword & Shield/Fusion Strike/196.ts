import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [705],
	set: Set,

	name: {
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		it: "Sliggoo",
		pt: "Sliggoo",
		de: "Viscargot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
		es: "Goomy",
		it: "Goomy",
		pt: "Goomy",
		de: "Viscora"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		en: "The lump on its back contains its tiny brain. It thinks only of food and escaping its enemies."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Melt"
		},

		damage: 20
	}, {
		cost: ["Water", "Psychic"],

		name: {
			en: "Body Slam"
		},

		damage: 50,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
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