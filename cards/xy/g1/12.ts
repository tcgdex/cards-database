import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-12",
	localId: 12,

	// Card informations
	name: {
		en: "M Charizard-EX",
		fr: "M-Dracaufeu-EX",
	},

	hp: 220,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/12/high",
		},
	},

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Typhoon",
			fr: "Typhon Ardent",
		},
		text: {
			en: "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 50 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Fire attachée à ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
