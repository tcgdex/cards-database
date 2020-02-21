import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-85",
	localId: 85,

	// Card informations
	name: {
		en: "Audino",
		fr: "Nanméouïe",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 531,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/85/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/85/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Do the Wave",
			fr: "Faites la Vague",
		},
		text: {
			en: "Does 10 damage times the number of your Benched Pokémon.",
			fr: "Inflige 10 dégâts multipliés par le nombre de vos Pokémon de Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
