import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Mantyke",
		fr: "Babimanta",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 458,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/55/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/55/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Mantine from your hand onto Mantyke (this counts as evolving Mantyke) and remove all damage counters from Mantyke.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Demanta de votre main sur Babimanta (vous le faites ainsi évoluer) et retirer à Babimanta tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Call for Friends",
			fr: "À la rescousse!",
		},
		text: {
			en: "Search your deck for a  grass Basic Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck un Pokémon de Base Water, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
