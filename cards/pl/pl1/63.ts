import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Silcoon",
		fr: "Armulys",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 266,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/63/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/63/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/63/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		name: {
			en: "Ascension",
			fr: "Ascension",
		},
		text: {
			en: "Search your deck for a card that evolves from Silcoon and put it onto Silcoon. (This counts as evolving Silcoon.) Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte qui évolue d'Armulys et placez-la sur Armulys. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sticky String",
			fr: "Ficelle collante",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
