import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		pt: "Melmetal",
		de: "Melmetal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		en: "Revered long ago for its capacity to create iron from nothing, for some reason it has come back to life after 3,000 years."
	},

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Ingot Swing"
		},

		damage: 80,

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			en: "Blasting Hammer"
		},

		damage: 150,

		effect: {
			en: "Discard an Energy from this Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card