import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/53/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/53/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/53/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Aura Sphere",
			fr: "Aurasphère",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Do the Wave",
			fr: "Faites la vague",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each of your Benched Pokémon.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de votre Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
