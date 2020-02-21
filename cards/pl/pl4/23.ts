import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-23",
	localId: 23,

	// Card informations
	name: {
		en: "Omastar",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/23/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Time Spiral",
		},
		text: {
			en: "Choose 1 of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from that Pokémon and have your opponent shuffle that card into his or her deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Primal Tentacles",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Helix Fossil, Dome Fossil, and Old Amber in your discard pile.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
