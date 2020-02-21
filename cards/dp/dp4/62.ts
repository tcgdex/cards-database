import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-62",
	localId: 62,

	// Card informations
	name: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 331,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/62/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/62/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 148,
		name: "Saya　Tsuruta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sand Attack",
			fr: "Jet de sable",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-venin",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
