import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-44",
	localId: 44,

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
			en: "https://assets.tcgdex.net/en/bw/bw6/44/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/44/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/44/high",
		},
	},

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à 1 de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
