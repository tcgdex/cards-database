import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-46",
	localId: 46,

	// Card informations
	name: {
		en: "Piloswine",
		fr: "Piloswine",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/46/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/46/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/46/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rouse",
			fr: "Éveiller",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on Piloswine. Then, remove 4 damage counters from Piloswine.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Cochignon. Ensuite, retirez à Cochignon 4 marqueurs de dégât.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Overrun",
			fr: "Dépassement",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
