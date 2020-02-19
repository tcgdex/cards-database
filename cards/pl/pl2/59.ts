import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-59",
	localId: 59,

	// Card informations
	name: {
		en: "Eevee",
		fr: "Evoli Niv. 10",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/59/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/59/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/59/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		name: {
			en: "Signs of Evolution",
			fr: "Signes d'evolution",
		},
		text: {
			en: "Search your deck for up to 2 cards that evolve from Eevee, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes qui évoluent d'Evoli. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bounce",
			fr: "Faire des bonds",
		},
		text: {
			en: "Switch Eevee with 1 of your Benched Pokémon.",
			fr: "Échangez Evoli avec 1 des Pokémon de votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

