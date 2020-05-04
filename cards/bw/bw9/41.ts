import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-41",
	localId: 41,

	// Card informations
	name: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 30,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/41/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
			fr: "Double Pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
