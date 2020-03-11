import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-43",
	localId: 43,

	// Card informations
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/43/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/43/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/43/high",
		},
	},

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to all of your opponent's Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flash Impact",
			fr: "Impact-Flash",
		},
		text: {
			en: "Does 20 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
