import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-32",
	localId: 32,

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
			en: "https://assets.tcgdex.net/en/sm/sm2/32/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/32/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/32/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "so-taro",



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
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Raging Floe",
			fr: "Banquise Furieuse",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
