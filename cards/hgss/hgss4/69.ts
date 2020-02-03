import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-69",
	localId: 69,

	// Card informations
	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 29,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/69/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/69/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/69/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Friend Search",
			fr: "À la recherche d'amis",
		},
		text: {
			en: "Look at the top 5 cards of your deck, choose 1 Pokémon you find there, show it to your opponent, and put it into your hand. Shuffle the other cards back into your deck.",
			fr: "Regardez les 5 cartes du dessus de votre deck, choisissez-y un Pokémon, montrez-le à votre adversaire et ajoutez-le à votre main. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
			fr: "Double pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

