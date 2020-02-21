import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-24",
	localId: 24,

	// Card informations
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 693,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/24/high",
		},
	},

	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Reverse Thrust",
			fr: "Poussée Inverse",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Splash Cannon",
			fr: "Canon Éclaboussant",
		},
		text: {
			en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
