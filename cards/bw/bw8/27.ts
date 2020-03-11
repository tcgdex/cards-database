import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-27",
	localId: 27,

	// Card informations
	name: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/27/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/27/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/27/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Beam",
			fr: "Laser Glace",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quintuple Headbutt",
			fr: "Quintuple Coup d'Boule",
		},
		text: {
			en: "Flip 5 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 5 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
