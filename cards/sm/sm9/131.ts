import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-131",
	localId: 131,

	// Card informations
	name: {
		en: "Lugia",
		fr: "Lugia",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/131/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/131/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/131/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Power Charger",
			fr: "Charge Puissance",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
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
			en: "Blasting Wind",
			fr: "Vent Impitoyable",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
