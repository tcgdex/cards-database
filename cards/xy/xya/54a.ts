import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xya-54a",
	localId: "54a",

	// Card informations
	name: {
		fr: "Zygarde-ex",
	},

	hp: 190,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/54a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/54a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			fr: "Vibration Terrestre",
		},
		text: {
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: "20+"
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			fr: "Tempête Cellulaire",
		},
		text: {
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			fr: "Force Chtonienne",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
