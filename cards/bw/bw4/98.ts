import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-98",
	localId: 98,

	// Card informations
	name: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/98/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/98/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "X Ball",
			fr: "X Ball",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to this Pokémon and the Defending Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon et au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psydrive",
			fr: "Psykoforce",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
