import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-72",
	localId: 72,

	// Card informations
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 114,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/72/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/72/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hideaki Hakozaki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Nutritional Support",
			fr: "Support nutritionnel",
		},
		text: {
			en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck 1 carte Énergie Grass et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poisonpowder",
			fr: "Poudre Toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
