import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-81",
	localId: 81,

	// Card informations
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 674,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Arm Thrust",
			fr: "Cogne",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
