import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Stonjourner V",
		fr: "Dolman V",
	},

	hp: 220,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/115/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/115/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent’s next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Mega Kick",
			fr: "Ultimawashi",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
