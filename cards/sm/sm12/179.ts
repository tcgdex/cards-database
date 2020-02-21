import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-179",
	localId: 179,

	// Card informations
	name: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 694,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/179/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/179/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/179/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/179/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 89,
		name: "Sekio"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Whip",
			fr: "Mimi-Queue",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
			fr: "Ruade",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
