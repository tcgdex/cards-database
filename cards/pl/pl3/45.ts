import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-45",
	localId: 45,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/45/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/45/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 1115,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sunshine Fate",
			fr: "Destin ensoleillé",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Lunatone in play, you may look at the top 3 cards of your deck and put them back on top of your deck in any order. This power can't be used if Solrock is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez un Seleroc en jeu, vous pouvez regarder les 3 cartes du dessus de votre deck et les replacer au-dessus de votre deck dans n'importe quel ordre. Ce pouvoir ne peut pas être utilisé si Solaroc est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Luna Turn",
			fr: "Tour lunaire",
		},
		text: {
			en: "If Lunatone is in your discard pile, this attack does 30 damage plus 30 more damage. Then, search your discard pile for Lunatone, show it to your opponent, and shuffle it into your deck.",
			fr: "Si Seleroc se trouve dans votre pile de défausse, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Ensuite, cherchez Seleroc dans votre pile de défausse, montrez-le à votre adversaire et mélangez-le à votre deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
