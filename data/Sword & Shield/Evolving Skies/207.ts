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
		en: "Gyarados VMAX",
		fr: "Léviator VMAX",
		es: "Gyarados VMAX",
		it: "Gyarados VMAX",
		pt: "Gyarados VMAX",
		de: "Garados VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "Shin Nagasawa",
	dexId: [130],

	evolveFrom: {
		en: "Gyarados V",
		fr: "Léviator-V",
		es: "Gyarados V",
		it: "Gyarados-V",
		pt: "Gyarados V",
		de: "Garados-V"
	},

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Hyper Beam"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon."
		},

		damage: 120
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			en: "Max Tyrant"
		},

		damage: 240
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card
