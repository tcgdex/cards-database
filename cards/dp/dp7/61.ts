import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-61",
	localId: 61,

	// Card informations
	name: {
		en: "Finneon",
		fr: "Finneon",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 456,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/61/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/61/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/61/high",
		},
	},

	evolveFrom: {
		fr: "Ecayon",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Aqua Liner",
			fr: "Aqua-paquebot",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Mouth Pump",
			fr: "Bouche-pompe",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
