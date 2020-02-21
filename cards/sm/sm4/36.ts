import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-36",
	localId: 36,

	// Card informations
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 92,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Ominous Eyes",
			fr: "Regard Menaçant",
		},
		text: {
			en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
			fr: "Placez un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
