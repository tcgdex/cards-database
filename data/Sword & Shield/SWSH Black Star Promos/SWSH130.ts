import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",
	suffix: "V",

	name: {
		en: "Ice Rider Calyrex V"
	},

	rarity: "None",
	hp: 210,
	types: ["Water"],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Blizzard"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Frost Stamp"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card