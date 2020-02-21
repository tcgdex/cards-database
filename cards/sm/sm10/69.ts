import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-69",
	localId: 69,

	// Card informations
	name: {
		en: "Haunter",
		fr: "Spectrum",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 93,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/69/high",
		},
	},

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sinister Fog",
			fr: "Brouillard Sinistre",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent's Benched Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez un marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
