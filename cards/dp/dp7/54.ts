import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-54",
	localId: 54,

	// Card informations
	name: {
		en: "Bidoof",
		fr: "Bidoof",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 399,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/54/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/54/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/54/high",
		},
	},

	evolveFrom: {
		fr: "Keunotor",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Yawn",
			fr: "Baillement",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Self-abandonment",
			fr: "S'abandonner",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage to the Defending Pokémon. If tails, Bidoof does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts au Pokémon Défenseur. Si c'est pile, Keunotor s'inflige 10 dégâts.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
