import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-42",
	localId: 42,

	// Card informations
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 561,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/42/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/42/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Quick Turn",
			fr: "Vif Retournement",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Assault",
			fr: "Assaut Psychique",
		},
		text: {
			en: "Does 10 more damage for each damage counter on the Defending Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
