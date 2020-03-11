import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-115",
	localId: 115,

	// Card informations
	name: {
		en: "M Gyarados-EX",
		fr: "M-Léviator-eEX",
	},

	hp: 240,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/115/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/115/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/115/high",
		},
	},

	evolveFrom: {
		en: "Gyarados-EX",
		fr: "Léviator-eEX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blast Geyser",
			fr: "Geyser Explosif",
		},
		text: {
			en: "You may do 20 more damage for each Water Energy attached to this Pokémon. If you do, discard the top 2 cards of your deck.",
			fr: "Vous pouvez infliger 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
