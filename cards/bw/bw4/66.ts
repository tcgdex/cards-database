import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-66",
	localId: 66,

	// Card informations
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 450,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/66/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/66/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/66/high",
		},
	},

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Bazooka",
			fr: "Canon à Sable",
		},
		text: {
			en: "You may move a basic Energy attached to this Pokémon to 1 of your Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie de base attachée à ce Pokémon vers 1 de vos Pokémon de Banc.",
		},
		damage: 70
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Tumble",
			fr: "Roule-Pierre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
