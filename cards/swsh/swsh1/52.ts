import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-52",
	localId: 52,

	dexId: 226,

	// Card informations
	name: {
		en: "Mantine",
		fr: "Démanta",
	},

	hp: 110,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/52/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/52/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 38,
		name: "Jumpei Akasaka"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Reserve",
			fr: "Réserve d’Eau",
		},
		text: {
			en: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 3 cartes Énergie Eau, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
