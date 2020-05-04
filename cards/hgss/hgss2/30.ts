import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/30/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/30/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/30/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Mean Look",
			fr: "Regard noir",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
