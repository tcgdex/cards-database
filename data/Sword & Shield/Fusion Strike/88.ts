import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		en: "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sonic Boom"
		},

		damage: 40,

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Explosion"
		},

		damage: 120,

		effect: {
			en: "This Pokémon also does 90 damage to itself."
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