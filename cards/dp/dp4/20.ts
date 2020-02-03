import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-20",
	localId: 20,

	// Card informations
	name: {
		en: "Kingler",
		fr: "Krabboss",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 99,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/20/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/20/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/20/high.png",
		},
	},

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-masse",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Scissor Blow",
			fr: "Cou d'ciseaux",
		},
		text: {
			en: "If the Defending Pokémon would be Knocked Out by this attack, Kingler does 30 damage to itself.",
			fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, Krabboss s'inflige 30 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

