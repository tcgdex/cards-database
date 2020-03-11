import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-67",
	localId: 67,

	// Card informations
	name: {
		en: "Aggron",
		fr: "Galeking",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/67/high",
		},
	},

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Revenge Cannon",
			fr: "Canon Talion",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on all of your Benched Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur vos Pokémon de Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Buster Swing",
			fr: "Repoussoir",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
