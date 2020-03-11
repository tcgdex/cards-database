import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-83",
	localId: 83,

	// Card informations
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 241,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/83/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/83/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Powerful Friends",
			fr: "Force de l'Amitié",
		},
		text: {
			en: "If you have any Stage 2 Pokémon on your Bench, this attack does 70 more damage.",
			fr: "Si vous avez un Pokémon de Niveau 2 sur votre Banc, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
