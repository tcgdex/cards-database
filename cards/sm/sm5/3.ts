import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-3",
	localId: 3,

	// Card informations
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 469,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/3/high",
		},
	},

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Supersonic",
			fr: "Ultrason",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
