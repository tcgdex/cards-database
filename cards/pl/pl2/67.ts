import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-67",
	localId: 67,

	// Card informations
	name: {
		en: "Kecleon",
		fr: "Kecleon Niv. 34",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 352,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/67/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/67/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 739,
		type: AbilityType.POKEBODY,
		name: {
			en: "Colorful Body",
			fr: "Corps coloré",
		},
		text: {
			en: "Kecleon's type is Grass Fire Water Lightning Psychic Fighting Darkness Metal Colorless.",
			fr: "Kecleon est de type GrassFireWaterLightningPsychicFightingDarknessMetalColorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Smash",
			fr: "Triple éclate",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage plus 20 more damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
