import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-32",
	localId: 32,

	// Card informations
	name: {
		en: "Starmie BREAK",
		fr: "Staross TURBO",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/32/high",
		},
	},

	evolveFrom: {
		en: "Starmie",
		fr: "Staross",
	},

	tags: [
		Tag.BREAK,
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
			en: "Break Star",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This attack does 100 damage to each of your opponent's Pokémon BREAK. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			fr: "Étoile Turbo",
		},
		text: {
			fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon TURBO de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
