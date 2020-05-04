import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Basculin",
		fr: "Bargantua",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 550,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/35/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/35/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
