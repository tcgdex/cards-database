import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-57",
	localId: 57,

	// Card informations
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 620,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/57/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/57/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/57/high",
		},
	},

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "TOKIYA",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Aero Turn",
			fr: "Tour Aérien",
		},
		text: {
			en: "Return this Pokémon and all cards attached to it to your hand.",
			fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
