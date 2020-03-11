import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-146",
	localId: 146,

	// Card informations
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 22,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/146/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/146/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/146/high",
		},
	},

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drill Run Double",
			fr: "Double Tunnelier",
		},
		text: {
			en: "Flip a coin. If heads, discard 2 Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
		},
		damage: 70
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
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
