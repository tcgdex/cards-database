import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-76",
	localId: 76,

	// Card informations
	name: {
		en: "Lunatone",
		fr: "Seleroc",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/76/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/76/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 517,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Gravity Change",
			fr: "Changement de gravité",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. Then, if you have Solrock in play, draw a card. This power can't be used if Lunatone is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Ensuite, si vous avez Solaroc en jeu, piochez une carte. Ce pouvoir ne peut pas être utilisé si Seleroc est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Knock Over",
			fr: "Culbute",
		},
		text: {
			en: "You may discard any Stadium card in play.",
			fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
