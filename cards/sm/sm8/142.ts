import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-142",
	localId: 142,

	// Card informations
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 702,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/142/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Zzzap Touch",
			fr: "Contact Zzzap",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused. If tails, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
