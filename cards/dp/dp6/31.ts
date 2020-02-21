import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-31",
	localId: 31,

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/31/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/31/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 137,
		name: "Satoshi Ohta"
	},



	attacks: [{
		name: {
			en: "One Desire",
			fr: "Un souhait",
		},
		text: {
			en: "Search your deck for any 1 card. Shuffle your deck, then put that card on top of your deck.",
			fr: "Choisissez n'importe quelle carte dans votre deck. Mélangez votre deck puis placez cette carte au dessus de votre deck.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Doom Desire",
			fr: "Carnareket",
		},
		text: {
			en: "Discard all Energy attached to Jirachi. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
			fr: "Défaussez toutes les Énergies attachées à Jirachi. Le Pokémon Défenseur est mis K.O à la fin du prochain tour de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
