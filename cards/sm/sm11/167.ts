import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-167",
	localId: 167,

	// Card informations
	name: {
		en: "Slakoth",
		fr: "Parecool",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 287,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/167/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/167/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/167/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/167/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "miki kudo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lazy Howl",
			fr: "Hurlement Paresseux",
		},
		text: {
			en: "During your opponent's next turn, if they attach an Energy card from their hand to the Defending Pokémon, their turn ends.",
			fr: "Pendant le prochain tour de votre adversaire, s’il attache une carte Énergie de sa main au Pokémon Défenseur, son tour se termine.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hang Down",
			fr: "Suspension",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
