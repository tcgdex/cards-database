import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-37",
	localId: 37,

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
			en: "https://assets.tcgdex.net/en/sm/sm4/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/37/high",
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
		id: 147,
		name: "Eri Yamaki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pain Amplifier",
			fr: "Amplificateur de Douleur",
		},
		text: {
			en: "Put 2 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
			fr: "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
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
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
