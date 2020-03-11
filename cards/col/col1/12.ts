import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/12/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/12/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Destructive Tsunami",
			fr: "Tsunami destructeur",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage to each of your opponent's Pokémon. If tails, this attack does 40 damage to each of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts à chaque Pokémon de votre adversaire. Si c’est pile, cette attaque inflige 40 dégâts à chacun de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
