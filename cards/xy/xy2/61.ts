import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Durant",
		fr: "Fermite",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 632,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/61/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/61/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/61/high",
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
			en: "Chip Off",
			fr: "Grignotement",
		},
		text: {
			en: "Discard cards from your opponent's hand at random until he or she has 4 cards in his or her hand.",
			fr: "Défaussez des cartes de la main de votre adversaire au hasard jusqu'à ce qu'il ait 4 cartes dans sa main.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
