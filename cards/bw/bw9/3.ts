import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-3",
	localId: 3,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/3/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/3/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/3/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Swift Sting",
			fr: "Piqûre Vive",
		},
		text: {
			en: "If this Pokémon has full HP, this attack does 40 more damage, and the Defending Pokémon is now Confused and Poisoned.",
			fr: "Si ce Pokémon a tous ses PV, cette attaque inflige 40 dégâts supplémentaires, et le Pokémon Défenseur est maintenant Confus et Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
