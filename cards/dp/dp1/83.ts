import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 431,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/83/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/83/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/83/high",
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
			en: "Charm",
			fr: "Charme",
		},
		text: {
			en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pose",
			fr: "Pose",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
