import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-42",
	localId: 42,

	// Card informations
	name: {
		en: "Wynaut",
		fr: "Okéoké",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 360,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/42/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/42/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut) and remove all damage counters from Wynaut.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Qulbutoké de votre main sur Okéoké (vous le faites ainsi évoluer) et retirer à Okéoké tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Astonish",
			fr: "Etonnement",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la puis demandez à votre adversaire de la mélanger à son deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
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
