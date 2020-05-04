import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-85",
	localId: 85,

	// Card informations
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 683,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/85/high",
		},
	},

	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dizzying Cologne",
			fr: "Arôme Enivrant",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 40
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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
