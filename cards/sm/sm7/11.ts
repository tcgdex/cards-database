import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-11",
	localId: 11,

	// Card informations
	name: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 273,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hang Down",
			fr: "Suspension",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Harden",
			fr: "Armure",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques dont le montant des dégâts est de 40 ou moins.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
