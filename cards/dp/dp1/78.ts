import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-78",
	localId: 78,

	// Card informations
	name: {
		en: "Cleffa",
		fr: "Melo",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 173,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/78/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/78/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Clefairy from your hand onto Cleffa (this counts as evolving Cleffa) and remove all damage counters from Cleffa.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Melofée de votre main sur Melo (vous le faites ainsi évoluer) et retirer à Melo tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Eeek",
			fr: "Beurk",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
