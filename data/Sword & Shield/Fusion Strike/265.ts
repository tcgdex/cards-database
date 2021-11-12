import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Chandelure VMAX",
		fr: "Lugulabre VMAX",
		es: "Chandelure VMAX",
		it: "Chandelure VMAX",
		pt: "Chandelure VMAX",
		de: "Skelabra VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		en: "Chandelure V",
		fr: "Lugulabre-V",
		es: "Chandelure V",
		it: "Chandelure-V",
		pt: "Chandelure V",
		de: "Skelabra-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "AKIRA EGAWA",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cursed Shimmer"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon Tool cards from their hand."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Max Poltergeist"
		},

		damage: "70×",

		effect: {
			en: "Your opponent reveals their hand. This attack does 70 damage for each Trainer card you find there."
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