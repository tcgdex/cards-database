import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-77",
	localId: 77,

	// Card informations
	name: {
		en: "Sealeo",
		fr: "Phogleur Niv. 31",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 364,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/77/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/77/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/77/high",
		},
	},

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		name: {
			en: "Find Ice",
			fr: "Trouver de la glace",
		},
		text: {
			en: "Search your deck for up to 2 Water Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck 2 cartes Énergie Water, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Sheer Cold",
			fr: "Glaciation",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
