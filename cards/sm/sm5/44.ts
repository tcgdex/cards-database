import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-44",
	localId: 44,

	// Card informations
	name: {
		en: "Electivire",
		fr: "Élekable",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/44/high",
		},
	},

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steel Short",
			fr: "Court Acier",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Metal Pokémon, it is now Paralyzed.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, il est maintenant Paralysé.",
		},
		damage: 60
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Volt Knuckle",
			fr: "Poing Volt",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
