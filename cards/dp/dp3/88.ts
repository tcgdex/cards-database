import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-88",
	localId: 88,

	// Card informations
	name: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/88/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/88/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mud Bomb",
			fr: "Boue-Bombe",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Gunky",
			fr: "Vase",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
