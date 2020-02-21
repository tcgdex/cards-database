import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-73",
	localId: 73,

	// Card informations
	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 777,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		text: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Random Spark",
			fr: "Étincelle Surprise",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
