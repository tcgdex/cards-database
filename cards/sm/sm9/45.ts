import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-45",
	localId: 45,

	// Card informations
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 523,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/45/high",
		},
	},

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Raid",
			fr: "Razzia Obscure",
		},
		text: {
			en: "If this Pokémon evolved from Blitzle during this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a évolué de Zébibron pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
		},
		damage: 100
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
