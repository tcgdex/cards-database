import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-42",
	localId: 42,

	// Card informations
	name: {
		en: "Wigglytuff-GX",
		fr: "Grodoudou-GX",
	},

	hp: 210,

	type: [
		Type.FAIRY,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/42/high",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Rush",
			fr: "Ruée-Boulée",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 100
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Lovely Star-GX",
			fr: "Belle Étoile-GX",
		},
		text: {
			en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
