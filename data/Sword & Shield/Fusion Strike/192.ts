import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
		es: "Copperajah",
		it: "Copperajah",
		pt: "Copperajah",
		de: "Patinaraja"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		en: "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder."
	},

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Strength"
		},

		damage: 90
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "High Horsepower"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself."
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