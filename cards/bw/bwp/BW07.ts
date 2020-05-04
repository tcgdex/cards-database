import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW07",
	localId: "BW07",

	// Card informations
	name: {
		en: "Tepig",
		fr: "Gruikui",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 498,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW07/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW07/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW07/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW07/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Singe",
			fr: "Roussi",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Firebreathing",
			fr: "Souffle-Feu",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
