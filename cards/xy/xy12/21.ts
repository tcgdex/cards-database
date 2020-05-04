import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-21",
	localId: 21,

	// Card informations
	name: {
		en: "Blastoise-EX",
		fr: "Tortank-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/21/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/21/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rapid Spin",
			fr: "Tour Rapide",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Ensuite, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Splash Bomb",
			fr: "Bombe Éclaboussante",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
