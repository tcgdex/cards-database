import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-52",
	localId: 52,

	// Card informations
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 657,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/52/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/52/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/52/high",
		},
	},

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Afterimage Strike",
			fr: "Frap’Invisible",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c’est face, évitez ces dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
