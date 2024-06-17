import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		it: "Noivern",
		pt: "Noivern",
		de: "UHaFnir"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "They fly around on moonless nights and attack careless prey. Nothing can beat them in a battle in the dark."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Second Bite"
		},

		damage: "20+",

		effect: {
			en: "This attack does 10 more damage for each damage counter on your opponent’s Active Pokémon."
		}
	}, {
		name: {
			en: "Sonic Bazooka"
		},

		damage: "60+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage and your opponent’s Active Pokémon is now Confused."
		}
	}],

	hp: 110,
	types: ["Dragon"],

	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		it: "Noibat",
		pt: "Noibat",
		de: "eF-eM"
	},

	retreat: 1,

	weaknesses: [{
		type: "Fairy",
		value: "×2"
	}]
}

export default card