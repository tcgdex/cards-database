import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-137",
	localId: 137,

	// Card informations
	name: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 559,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swagger",
			fr: "Vantardise",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whap Down",
			fr: "Assommer",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
