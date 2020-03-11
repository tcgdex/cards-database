import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-49",
	localId: 49,

	// Card informations
	name: {
		en: "Gligar",
		fr: "Scorplane",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 207,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/49/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/49/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stun Poison",
			fr: "Poison neural",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
