import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Azurill",
		fr: "Azurill",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 298,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/69/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/69/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/69/high.png",
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
			en: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill) and remove all damage counters from Azurill.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Marill de votre main sur Azurill (vous le faites ainsi évoluer) et retirer à Azurill tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Delivery",
			fr: "Livraison",
		},
		text: {
			en: "Put any 1 card from your discard pile into your hand.",
			fr: "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
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

