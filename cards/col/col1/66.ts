import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 231,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/66/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/66/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 681,
		type: AbilityType.POKEBODY,
		name: {
			en: "Ultra-thick Skin",
			fr: "Peau ultra-épaisse",
		},
		text: {
			en: "As long as Phanpy has any Energy attached to it, any damage done to Phanpy by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Tant que Phanpy possède au moins une Énergie, les dégâts infligés à Phanpy par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Smash",
			fr: "Éclate-roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
