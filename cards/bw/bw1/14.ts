import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 586,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/14/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/14/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/14/high",
		},
	},

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nature Power",
			fr: "Force-Nature",
		},
		text: {
			en: "Does 10 more damage for each Grass Energy attached to both your and your opponent's Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Grass attachée à vos Pokémon et à ceux de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Leech",
			fr: "Encornebois",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
