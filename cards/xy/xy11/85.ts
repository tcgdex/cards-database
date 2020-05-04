import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-85",
	localId: 85,

	// Card informations
	name: {
		en: "Zweilous",
		fr: "Diamat",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 634,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/85/high",
		},
	},

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Hit",
			fr: "Coup Double",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Breath",
			fr: "Souffle Puissant",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
