import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-38",
	localId: 38,

	// Card informations
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/38/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Edge",
			fr: "Tranchant Sonique",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
