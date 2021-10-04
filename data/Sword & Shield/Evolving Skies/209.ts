import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Glaceon VMAX",
		fr: "Givrali VMAX",
		es: "Glaceon VMAX",
		it: "Glaceon VMAX",
		pt: "Glaceon VMAX",
		de: "Glaziola VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "kirisAki",
	dexId: [471],

	evolveFrom: {
		en: "Glaceon V",
		fr: "Givrali-V",
		es: "Glaceon V",
		it: "Glaceon-V",
		pt: "Glaceon V",
		de: "Glaziola-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Crystal Veil"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX, except any Glaceon VMAX."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Max Icicle"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	suffix: "V"
}

export default card