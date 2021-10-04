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
		en: "Duraludon VMAX",
		fr: "Duralugon VMAX",
		es: "Duraludon VMAX",
		it: "Duraludon VMAX",
		pt: "Duraludon VMAX",
		de: "Duraludon VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "VMAX",
	illustrator: "Saki Hayashiro",
	dexId: [884],

	evolveFrom: {
		en: "Duraludon V",
		fr: "Duralugon-V",
		es: "Duraludon V",
		it: "Duraludon-V",
		pt: "Duraludon V",
		de: "Duraludon-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Skyscraper"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon that have Special Energy attached."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Metal", "Metal"],

		name: {
			en: "G-Max Pulverization"
		},

		effect: {
			en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon."
		},

		damage: 220
	}],

	retreat: 3,
	suffix: "V"
}

export default card