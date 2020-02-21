import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Palkia",
		fr: "Palkia",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/11/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/11/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Spacial Rend",
			fr: "Spatio-Rift",
		},
		text: {
			en: "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. If there is any Stadium card in play, discard it.",
			fr: "Choisissez dans votre deck une carte Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Si une carte Stade est en jeu, défaussez-la.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Transback",
			fr: "Transfert",
		},
		text: {
			en: "You may flip a coin. If heads, discard all Energy attached to Palkia and put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
			fr: "Vous pouvez lancer une pièce. Si c'est face, défaussez toutes les Énergies attachées à Palkia et placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées au dessus du deck de votre adversaire. Ensuite, votre adversaire mélange son deck.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
