import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-76",
	localId: 76,

	// Card informations
	name: {
		en: "Mew",
		fr: "Mew",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 113,
		type: AbilityType.TALENT,
		name: {
			en: "Bench Barrier",
			fr: "Barrière de Banc",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
			fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psypower",
			fr: "Puissance Psy",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
