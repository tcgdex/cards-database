import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		pt: "Delcatty",
		de: "Enekoro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		en: "It is highly popular among female Trainers for its sublime fur. It does not keep a nest."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Willful Busybody"
		},

		effect: {
			en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Slap"
		},

		damage: "50×",

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads."
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