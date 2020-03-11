import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-108",
	localId: 108,

	// Card informations
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 431,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/108/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/108/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gentle Bite",
			fr: "Morsure Douce",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 40 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 40 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
