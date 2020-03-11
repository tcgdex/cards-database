import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xya-55a",
	localId: "55a",

	// Card informations
	name: {
		fr: "M-Lucario-ex",
	},

	hp: 220,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/55a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/55a/high",
		},
	},

	evolveFrom: {
		fr: "Lucario-ex",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			fr: "Poing Imminent",
		},
		text: {
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
