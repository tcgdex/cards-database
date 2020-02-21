import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-18",
	localId: 18,

	// Card informations
	name: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 722,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé",
		},
		text: {
			en: "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
