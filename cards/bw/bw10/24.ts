import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-24",
	localId: 24,

	// Card informations
	name: {
		en: "Relicanth",
		fr: "Relicanth",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/24/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/24/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fossil Hunt",
			fr: "Chasse au Fossile",
		},
		text: {
			en: "Put 2 Item cards that have Fossil in their names from your discard pile into your hand.",
			fr: "Ajoutez 2 cartes Objet qui ont Fossile dans leur nom de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
