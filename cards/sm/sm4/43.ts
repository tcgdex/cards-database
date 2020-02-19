import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-43",
	localId: 43,

	// Card informations
	name: {
		en: "Chimecho",
		fr: "Éoko",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/43/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/43/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/43/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Bell of Silence",
			fr: "Cloche du Silence",
		},
		text: {
			en: "Your opponent can't play any Pokémon that has an Ability from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de Pokémon ayant un talent de sa main pendant son prochain tour.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

