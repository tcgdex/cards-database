import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar V",
		fr: "Ectoplasma V",
		es: "Gengar V",
		it: "Gengar V",
		pt: "Gengar V",
		de: "Gengar V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Dark Slumber"
		},

		damage: 40,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Pain Explosion"
		},

		damage: 190,

		effect: {
			en: "Put 3 damage counters on this Pokémon."
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