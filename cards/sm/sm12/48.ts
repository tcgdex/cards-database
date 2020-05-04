import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-48",
	localId: 48,

	// Card informations
	name: {
		en: "Glalie",
		fr: "Oniglali",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 362,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/48/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/48/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/48/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Uta",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Fang",
			fr: "Crocs Givre",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frosty Typhoon",
			fr: "Typhon Givré",
		},
		text: {
			en: "This Pokémon can't use Frosty Typhoon during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Typhon Givré pendant votre prochain tour.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
