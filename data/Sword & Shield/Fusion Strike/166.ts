import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		pt: "Toxicroak",
		de: "Toxiquak"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
		es: "Croagunk",
		it: "Croagunk",
		pt: "Croagunk",
		de: "Glibunkel"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Masakazu Fukuda",

	description: {
		en: "It booms out a victory croak when its prey goes down in defeat. This Pokémon and Seismitoad are related species."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Severe Poison"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 4 damage counters on that Pokémon instead of 1."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Magnum Punch"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card