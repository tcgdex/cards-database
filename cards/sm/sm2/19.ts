import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-19",
	localId: 19,

	// Card informations
	name: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 27,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/19/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/19/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/19/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		name: {
			en: "Defense Curl",
			fr: "Boul’Armure",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Ball",
			fr: "Ball’Glace",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

