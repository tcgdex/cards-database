import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-38",
	localId: 38,

	// Card informations
	name: {
		en: "Farfetch'd",
		fr: "Farfetch'd",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 83,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/38/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/38/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/38/high",
		},
	},

	evolveFrom: {
		fr: "Canarticho",
	},

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
			en: "Go and Collect",
			fr: "Aller chercher",
		},
		text: {
			en: "Search your deck for a Trainer, Supporter, or Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Dresseur, Supporter ou Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
			fr: "Taillade",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
			fr: "Lancez 3 pièces. Si l'1 d'elles est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si 2 d'entre elles sont des faces, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si ce ne sont que des faces, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
