import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-36",
	localId: 36,

	// Card informations
	name: {
		en: "Uxie",
		fr: "Créhelf",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 480,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/36/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/36/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/36/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psypower",
			fr: "Puissance Psy",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

