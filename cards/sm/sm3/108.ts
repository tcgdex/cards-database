import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-108",
	localId: 108,

	// Card informations
	name: {
		en: "Bouffalant",
		fr: "Frison",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 626,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/108/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/108/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bouffant Head",
			fr: "Tête Frisée",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Over",
			fr: "Culbute",
		},
		text: {
			en: "You may discard any Stadium card in play.",
			fr: "Vous pouvez défausser toute carte Stade en jeu.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

