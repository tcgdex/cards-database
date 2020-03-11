import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-36",
	localId: 36,

	// Card informations
	name: {
		en: "Plusle",
		fr: "Posipi",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/36/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/36/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Jolt",
			fr: "Secousse tonnerre",
		},
		text: {
			en: "Flip a coin. If tails, Plusle does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Posipi s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
