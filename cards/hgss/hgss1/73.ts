import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-73",
	localId: 73,

	// Card informations
	name: {
		en: "Mareep",
		fr: "Wattouat",
	},

	hp: 40,

	type: [
		Type.LIGHTNING,
	],

	dexId: 179,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/73/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/73/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Static Electricity",
			fr: "Électricité statique",
		},
		text: {
			en: "Search your deck for a number of Lightning Energy cards up to the number of Mareep in play (both yours and your opponent's) and attach them to Mareep. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck un nombre de cartes Énergie Lightning allant jusqu’au nombre de Wattouat en jeu (les vôtres et ceux de votre adversaire) et attachez-les à Wattouat. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
