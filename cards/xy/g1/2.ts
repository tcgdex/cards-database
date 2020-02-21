import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-2",
	localId: 2,

	// Card informations
	name: {
		en: "M Venusaur-EX",
		fr: "M-Florizarre-EX",
	},

	hp: 230,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/2/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/2/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/2/high",
		},
	},

	evolveFrom: {
		en: "Venusaur-EX",
		fr: "Florizarre-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bloom Buster",
			fr: "Explo Pousse",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
