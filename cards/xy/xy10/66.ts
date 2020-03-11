import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-66",
	localId: 66,

	// Card informations
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/66/high",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Expand",
			fr: "Expansion",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
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

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
