import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-SH1",
	localId: "SH1",

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Drifloon (different color)",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/SH1/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/SH1/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH1/high",
		},
	},

	evolveFrom: {
		fr: "Baudrive",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 594,
		type: AbilityType.POKEBODY,
		name: {
			en: "Unburden",
			fr: "Délestage",
		},
		text: {
			en: "If Drifloon has a Pokémon Tool card attached to it, Drifloon's Retreat Cost is colorless colorless more.",
			fr: "Si Baudrive possède une carte Outil Pokémon, son Coût de retraite est de Colorless Colorless de plus.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Big Explosion",
			fr: "Grosse explosion",
		},
		text: {
			en: "Drifloon does 50 damage to itself.",
			fr: "Baudrive s'inflige 50 dégâts.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
