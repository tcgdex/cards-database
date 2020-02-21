import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-63",
	localId: 63,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/63/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/63/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rummage",
			fr: "Farfouiller",
		},
		text: {
			en: "Look at the top 5 cards of your deck. Choose as many Trainer cards as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
			fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez autant de cartes Dresseur que vous voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Sneak",
			fr: "Ombre Portée",
		},
		text: {
			en: "If you and your opponent have a different number of Prize cards left, this attack does 20 damage plus 20 more damage.",
			fr: "S'il reste à vous et votre adversaire un nombre différent de cartes Récompense, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
