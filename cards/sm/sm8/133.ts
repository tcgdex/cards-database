import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-133",
	localId: 133,

	// Card informations
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/133/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/133/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/133/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Pound",
			fr: "Écras’Face",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sing",
			fr: "Berceuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
