import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 417,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/35/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/35/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Minor Errand-Running",
			fr: "Rendez-vous mineur",
		},
		text: {
			en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Jolt",
			fr: "Secousse tonnerre",
		},
		text: {
			en: "Flip a coin. If tails, Pachirisu does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Pachirisu s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
