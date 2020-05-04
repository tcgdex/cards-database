import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-74",
	localId: 74,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/74/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/74/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tripping Headbutt",
			fr: "Coup d'boule agile",
		},
		text: {
			en: "Filp a coin. If heads, this attack does 30 damage to 1 of your opponent's Pokémon. If tails, this attack does 30 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. Si c'est pile, cette attaque inflige 30 dégâts à l'un de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
