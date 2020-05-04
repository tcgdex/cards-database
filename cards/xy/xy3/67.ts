import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-67",
	localId: 67,

	// Card informations
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 560,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/67/high",
		},
	},

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Machine Gun Headbutt",
			fr: "Mitraille-Tête",
		},
		text: {
			en: "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
