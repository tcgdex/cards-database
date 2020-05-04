import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-65",
	localId: 65,

	// Card informations
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 534,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/65/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/65/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/65/high",
		},
	},

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Chip Away",
			fr: "Attrition",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Swing Around",
			fr: "Balançoire",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
