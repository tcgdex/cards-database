import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xya-24a",
	localId: "24a",

	// Card informations
	name: {
		fr: "M-Élecsprint-ex",
	},

	hp: 210,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/24a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/24a/high",
		},
	},

	evolveFrom: {
		fr: "Élecsprint-ex",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			fr: "Éclair Turbo",
		},
		text: {
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
