import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-43",
	localId: 43,

	// Card informations
	name: {
		en: "Budew",
		fr: "Rozbouton",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 406,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/43/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/43/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Roselia from your hand onto Budew (this counts as evolving Budew) and remove all damage counters from Budew.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Roselia de votre main sur Rozbouton (vous le faites ainsi évoluer) et retirer à Rozbouton tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Errand-Running",
			fr: "Rendez-vous",
		},
		text: {
			en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
