import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-85",
	localId: 85,

	// Card informations
	name: {
		en: "Floette",
		fr: "Floette",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 670,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/85/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/85/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/85/high",
		},
	},

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 59,
		name: "Mina Nakai"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Swirling Petals",
			fr: "Pétales Tourbillonnants",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. If you do, switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
