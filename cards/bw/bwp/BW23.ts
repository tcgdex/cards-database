import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW23",
	localId: "BW23",

	// Card informations
	name: {
		en: "Reshiram",
		fr: "Reshiram",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW23/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW23/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Outrage",
			fr: "Colère",
		},
		text: {
			en: "Does 10 more damage for each damage counter on this Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Blue Flare",
			fr: "Flamme Bleue",
		},
		text: {
			en: "Discard 2 Fire Energy attached to this Pokémon.",
			fr: "Défaussez 2 Énergies Fire attachées à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
