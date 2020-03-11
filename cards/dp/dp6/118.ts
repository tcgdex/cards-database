import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-118",
	localId: 118,

	// Card informations
	name: {
		en: "Shinx",
		fr: "Lixy",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 403,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/118/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/118/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Recharge",
			fr: "Recharger",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to Shinx. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Énergie Lightning et attachez-la à Lixy. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
			fr: "Double pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
