import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-89",
	localId: 89,

	// Card informations
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/89/high",
		},
	},

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lullaby",
			fr: "Comptine",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Meteor Mash",
			fr: "Poing Météore",
		},
		text: {
			en: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
