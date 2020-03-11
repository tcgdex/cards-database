import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-154",
	localId: 154,

	// Card informations
	name: {
		en: "M Houndoom-EX",
		fr: "Méga-Démolosse-EXEX",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/154/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/154/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/154/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/154/high",
		},
	},

	evolveFrom: {
		en: "Houndoom-EX",
		fr: "Démolosse-EEX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Inferno Fang",
			fr: "Croc Infernal",
		},
		text: {
			en: "You may discard all Fire Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
			fr: "Vous pouvez défausser toutes les Énergies Fire attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
