import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-79",
	localId: 79,

	// Card informations
	name: {
		en: "Passimian",
		fr: "Quartermac",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 766,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/79/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/79/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/79/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punch",
			fr: "Koud’Poing",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Intentional Grounding",
			fr: "Mauvais Lancer",
		},
		text: {
			en: "Discard a Pokémon Tool card from your hand. If you don't, this attack does nothing.",
			fr: "Défaussez une carte Outil Pokémon de votre main. Sinon, cette attaque ne fait rien.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

