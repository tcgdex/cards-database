import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [120],
	set: Set,

	name: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		en: "No number of injuries can bother Staryu. Its amazing regenerative powers return it to its previous state in half a day!"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Soak in Water"
		},

		effect: {
			en: "Attach a Water Energy card from your hand to this Pokémon."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Spinning Attack"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card