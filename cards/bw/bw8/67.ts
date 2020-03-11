import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-67",
	localId: 67,

	// Card informations
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 569,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/67/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/67/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/67/high",
		},
	},

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ensnarl",
			fr: "Empêtrement",
		},
		text: {
			en: "Does 20 damage times the number of Colorless in the Defending Pokémon's Retreat Cost.",
			fr: "Inflige 20 dégâts multipliés par le nombre de Colorless dans le coût de Retraite du Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Ducts",
			fr: "Double Boyau",
		},
		text: {
			en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
