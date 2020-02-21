import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-153",
	localId: 153,

	// Card informations
	name: {
		en: "Latias",
		fr: "Latias",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/153/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/153/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/153/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 91,
		name: "chibi"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Arrow",
			fr: "Flèche d’Énergie",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to 1 of your opponent's Pokémon to that Pokémon. This damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à l’un des Pokémon de votre adversaire à ce Pokémon-là. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
