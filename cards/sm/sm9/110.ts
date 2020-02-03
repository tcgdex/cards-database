import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-110",
	localId: 110,

	// Card informations
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 707,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/110/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/110/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/110/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 1320,
		type: AbilityType.TALENT,
		name: {
			en: "Key of Secrets",
			fr: "Clé des Secrets",
		},
		text: {
			en: "Each of your Metal Pokémon's Resistance is now -40.",
			fr: "La Résistance de chacun de vos Pokémon Metal est maintenant -40.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

