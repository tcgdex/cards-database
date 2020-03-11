import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-71",
	localId: 71,

	// Card informations
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 528,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/71/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/71/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/71/high",
		},
	},

	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Jet Woofer",
			fr: "Infrasons",
		},
		text: {
			en: "For each Psychic Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			fr: "Pour chaque Énergie Psychic attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
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
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
