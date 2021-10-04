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
		en: "Trevenant VMAX",
		fr: "Desséliande VMAX",
		es: "Trevenant VMAX",
		it: "Trevenant VMAX",
		pt: "Trevenant VMAX",
		de: "Trombork VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "MUGENUP",
	dexId: [709],

	evolveFrom: {
		en: "Trevenant V",
		fr: "Desséliande-V",
		es: "Trevenant V",
		it: "Trevenant-V",
		pt: "Trevenant V",
		de: "Trombork-V"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Missing in the Forest"
		},

		effect: {
			en: "This attack does 40 damage for each Supporter card in your opponent’s discard pile."
		},

		damage: "40×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Max Tree"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	suffix: "V"
}

export default card