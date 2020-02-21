import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-65",
	localId: 65,

	// Card informations
	name: {
		en: "Magmar",
		fr: "Magmar",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 126,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/65/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/65/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smokescreen",
			fr: "Brouillard",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fireworks",
			fr: "Feux d'artifices",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Magmar.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Magmar.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
