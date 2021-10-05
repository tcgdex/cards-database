import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",
	suffix: "V",

	name: {
		en: "Dragapult V"
	},

	rarity: "None",
	dexId: [887],
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Bite"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Jet Assault"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage."
		},

		damage: "60+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card