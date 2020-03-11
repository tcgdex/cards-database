import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-97",
	localId: 97,

	// Card informations
	name: {
		en: "Drampa",
		fr: "Draïeul",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 780,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amass",
			fr: "Amas",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Cyclone",
			fr: "Cyclone d’Énergie",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
