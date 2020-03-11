import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/56/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/56/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/56/high",
		},
	},

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "TOKIYA",

	abilities: [{
		id: 18,
		type: AbilityType.TALENT,
		name: {
			en: "Retreat Aid",
			fr: "Soutien de Retraite",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
			fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Attack",
			fr: "Furie",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
