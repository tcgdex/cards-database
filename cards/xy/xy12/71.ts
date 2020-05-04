import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-71",
	localId: 71,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomoaki Imakuni",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Conversion 3",
			fr: "Conversion 3",
		},
		text: {
			en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. The Defending Pokémon's Weakness is now that type until the end of your next turn. (The amount of Weakness doesn't change.)",
			fr: "Choisissez le type Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy ou Dragon. La Faiblesse du Pokémon Défenseur est maintenant de ce type jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
