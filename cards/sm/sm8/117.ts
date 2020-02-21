import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-117",
	localId: 117,

	// Card informations
	name: {
		en: "Carbink",
		fr: "Strassie",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 703,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Diamond Gate",
			fr: "Portail Diamantin",
		},
		text: {
			en: "Search your deck for a Supporter card and a Stadium card, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte Supporter et une carte Stade dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
