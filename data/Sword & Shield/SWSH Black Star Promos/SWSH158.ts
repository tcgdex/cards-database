import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	stage: "V-UNION",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Greninja V-UNION",
		fr: "Amphinobi V-UNION",
		de: "Quajutsu V-UNION",
		es: "Greninja V-UNIÓN",
		pt: "Greninja V-UNIÃO",
		it: "Greninja V UNIONE"
	},

	rarity: "None",
	hp: 300,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Ninja Body"
		},

		effect: {
			en: "Whenever your opponent plays an Item card from their hand, prevent all effects of that card done to this Pokémon."
		}
	}, {
		type: "Ability",

		name: {
			en: "Antidote Jutsu"
		},

		effect: {
			en: "This Pokémon can't be Poisoned."
		}
	}, {
		type: "Ability",

		name: {
			en: "Feel the Way"
		},

		effect: {
			en: "Once during your turn, you may have your opponent reveal their hand."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Union Gain"
		},

		effect: {
			en: "Attach up to 2 Water Energy cards from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Aqua Edge"
		},

		damage: 130
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Twister Shuriken"
		},

		effect: {
			en: "This attack does 100 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Waterfall Bind"
		},

		damage: 180,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 0
}

export default card
