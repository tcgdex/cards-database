import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-92",
	localId: 92,

	// Card informations
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	hp: 30,

	type: [
		Type.FAIRY,
	],

	dexId: 742,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Fly Around",
			fr: "Papillonnement",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, évitez ces dégâts.",
		},
		damage: 10
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
