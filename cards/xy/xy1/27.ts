import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-27",
	localId: 27,

	// Card informations
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 662,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/27/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/27/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/27/high",
		},
	},

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
