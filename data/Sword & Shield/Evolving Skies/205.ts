import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Leafeon VMAX",
		fr: "Phyllali VMAX",
		es: "Leafeon VMAX",
		it: "Leafeon VMAX",
		pt: "Leafeon VMAX",
		de: "Folipurba VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "HYOGONOSUKE",
	dexId: [470],

	evolveFrom: {
		en: "Leafeon V",
		fr: "Phyllali-V",
		es: "Leafeon V",
		it: "Leafeon-V",
		pt: "Leafeon V",
		de: "Folipurba-V"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Grass Knot"
		},

		effect: {
			en: "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Max Leaf"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 170
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574032
	}
}

export default card
