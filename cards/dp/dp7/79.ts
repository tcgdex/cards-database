import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-79",
	localId: 79,

	// Card informations
	name: {
		en: "Treecko",
		fr: "Treecko",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 252,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/79/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/79/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/79/high.png",
		},
	},

	evolveFrom: {
		fr: "Arcko",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Friends",
			fr: "À la rescousse!",
		},
		text: {
			en: "Search your deck for a Basic Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck un Pokémon de base, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Breath",
			fr: "Haleine empoisonnée",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
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
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

