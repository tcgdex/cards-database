import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-75",
	localId: 75,

	// Card informations
	name: {
		en: "Omanyte",
		fr: "Amonita",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/75/high",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tickle",
			fr: "Chatouille",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
