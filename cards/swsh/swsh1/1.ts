import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-1",
	localId: 1,

	dexId: 251,

	// Card informations
	name: {
		en: "Celebi V",
		fr: "Celebi V",
	},

	hp: 180,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/1/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/1/low",
		},
	},

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	illustrator: {
		id: 0,
		name: "PLANETA Igarashi"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
		},
		text: {
			en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Line Force",
			fr: "Force Linéaire",
		},
		text: {
			en: "This attack does 20 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
		},
		damage: "50+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
