import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-98",
	localId: 98,

	// Card informations
	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 781,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Seaweed Grab",
			fr: "Algues Agrippantes",
		},
		text: {
			en: "Put a Trainer card from your discard pile into your hand.",
			fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Buster Swing",
			fr: "Repoussoir",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
