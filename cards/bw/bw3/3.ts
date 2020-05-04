import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-3",
	localId: 3,

	// Card informations
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 542,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/3/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/3/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/3/high",
		},
	},

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 785,
		type: AbilityType.TALENT,
		name: {
			en: "Leaf Tailor",
			fr: "Couturier",
		},
		text: {
			en: "Each of your Pokémon that has any Energy attached to it has no Weakness.",
			fr: "Chacun de vos Pokémon auquel de l'Énergie est attachée n'a pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Arm",
			fr: "Bras Coupant",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
