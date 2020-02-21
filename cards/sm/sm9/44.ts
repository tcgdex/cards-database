import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-44",
	localId: 44,

	// Card informations
	name: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 522,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Delivery Dash",
			fr: "Livraison Précipitée",
		},
		text: {
			en: "Search your deck for up to 2 Electropower cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes Électropuissance dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
