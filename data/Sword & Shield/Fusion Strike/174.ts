import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		en: "Using its leaf, Pangoro can predict the moves of its opponents. It strikes with punches that can turn a dump truck into scrap with just one hit."
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Knocking Hammer"
		},

		damage: 90,

		effect: {
			en: "Discard the top card of your opponent's deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			en: "Shakedown"
		},

		damage: 150,

		effect: {
			en: "Discard a random card from your opponent's hand."
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