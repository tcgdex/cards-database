import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-84",
	localId: 84,

	// Card informations
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/84/high",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Continuous Scratch",
			fr: "Griffe Continue",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
