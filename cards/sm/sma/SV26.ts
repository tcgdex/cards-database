import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV26",
	localId: "SV26",

	// Card informations
	name: {
		en: "Guzzlord",
		fr: "Engloutyran",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 799,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Lord's Valley",
			fr: "Vallée du Tyran",
		},
		text: {
			en: "If you have exactly 2, 4, or 6 Prize cards remaining, discard the top 10 cards of your deck.",
			fr: "S’il vous reste exactement 2, 4 ou 6 cartes Récompense, défaussez les 10 cartes du dessus de votre deck.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
