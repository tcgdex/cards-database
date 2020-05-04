import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-139",
	localId: 139,

	// Card informations
	name: {
		en: "Yveltal",
		fr: "Yveltal",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/139/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/139/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/139/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Blow Through",
			fr: "Grosse Bourrasque",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 20 more damage.",
			fr: "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Impact",
			fr: "Impact Lugubre",
		},
		text: {
			en: "Put 3 damage counters on 1 of your Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur l’un de vos Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
