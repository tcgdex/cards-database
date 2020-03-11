import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-80",
	localId: 80,

	// Card informations
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 521,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/80/high",
		},
	},

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong Winds",
			fr: "Vents Tourbillonnants",
		},
		text: {
			en: "Shuffle all cards attached to each player's Pokémon into that player's deck.",
			fr: "Mélangez toutes les cartes attachées aux Pokémon de chaque joueur au deck de ce joueur.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
