import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-26",
	localId: 26,

	// Card informations
	name: {
		en: "M Alakazam-EX",
		fr: "M-Alakazam-EX",
	},

	hp: 210,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/26/high",
		},
	},

	evolveFrom: {
		en: "Alakazam-EX",
		fr: "Alakazam-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Zen Force",
			fr: "Force Zen",
		},
		text: {
			en: "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
