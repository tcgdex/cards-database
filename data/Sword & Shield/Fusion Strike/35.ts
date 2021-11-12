import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo",
		de: "Magcargo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Eri Yamaki",

	description: {
		en: "Its body is as hot as lava and is always billowing. Flames will occasionally burst from its shell."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rock Throw"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Body Splash"
		},

		damage: 150,

		effect: {
			en: "Flip 3 coins. For each tails, discard an Energy from this Pokémon."
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