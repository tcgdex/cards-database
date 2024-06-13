import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		en: "Inteleon VMAX",
		fr: "Lézargus VMAX",
		es: "Inteleon VMAX",
		it: "Inteleon VMAX",
		pt: "Inteleon VMAX",
		de: "Intelleon VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		en: "Inteleon V",
		fr: "Lézargus-V",
		es: "Inteleon V",
		it: "Inteleon-V",
		pt: "Inteleon V",
		de: "Intelleon-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kazuma Koda",

	abilities: [{
		type: "Ability",

		name: {
			en: "Double Gunner"
		},

		effect: {
			en: "You must discard a Water Energy card from your hand in order to use this Ability. Once during your turn, you may choose 2 of your opponent's Benched Pokémon and put 2 damage counters on each of them."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "G-Max Spiral"
		},

		damage: "70+",

		effect: {
			en: "You may put an Energy attached to this Pokémon into your hand. If you do, this attack does 70 more damage."
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