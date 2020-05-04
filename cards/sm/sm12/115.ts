import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-115",
	localId: 115,

	// Card informations
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 530,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/115/high",
		},
	},

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Eleventh Hour Tackle",
			fr: "Tacle Désespéré",
		},
		text: {
			en: "If there are 3 or fewer cards in your deck, this attack does 150 more damage.",
			fr: "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 150 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Drill Bazooka",
			fr: "Perceuse Bazooka",
		},
		text: {
			en: "Discard the top 4 cards of your deck.",
			fr: "Défaussez les 4 cartes du dessus de votre deck.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
