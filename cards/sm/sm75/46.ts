import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-46",
	localId: 46,

	// Card informations
	name: {
		en: "Zekrom",
		fr: "Zekrom",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 644,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 70
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bolt Strike",
			fr: "Charge Foudre",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 50 damage to itself.",
			fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 50 dégâts.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
