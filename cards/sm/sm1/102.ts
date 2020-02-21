import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Spinda",
		fr: "Spinda",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 327,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/102/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/102/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/102/high",
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



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Teeter Punch",
			fr: "Coup de Poing Fou",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
