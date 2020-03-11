import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-115",
	localId: 115,

	// Card informations
	name: {
		en: "Mime Jr.",
		fr: "Mime Junior",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 439,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/115/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/115/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer M. Mime de votre main sur Mime Junior (vous le faites ainsi évoluer) et retirer à Mime Junior tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Encore",
			fr: "Encore",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can use only that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut utiliser que cette attaque lors du prochain tour de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
