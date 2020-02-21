import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-72",
	localId: 72,

	// Card informations
	name: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 231,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Endure",
			fr: "Ténacité",
		},
		text: {
			en: "Flip a coin. If heads, if this Pokémon would be Knocked Out by damage from an attack during your opponent's next turn, it is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Lancez une pièce. Si c’est face, et si ce Pokémon doit être mis K.O. par les dégâts d’une attaque pendant le prochain tour de votre adversaire, il n’est pas mis K.O., mais il n’a plus que 10 PV.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
