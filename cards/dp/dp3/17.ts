import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-17",
	localId: 17,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/17/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/17/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/17/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sleep Poison",
			fr: "Poison dodo",
		},
		text: {
			en: "The Defending Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magical Leaf",
			fr: "Feuillemagik",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage and remove 3 damage counters from Roserade.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Retirez à Roserade 3 marqueurs de dégât.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
