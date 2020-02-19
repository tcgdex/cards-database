import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-54",
	localId: 54,

	// Card informations
	name: {
		en: "Chatot G",
		fr: "Pijako ",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 441,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/54/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/54/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/54/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},

	abilities: [{
		id: 659,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Disrupting Spy",
			fr: "Espion dérangeant",
		},
		text: {
			en: "Once during your turn, when you put Chatot G from your hand onto your Bench, you may look at the top 4 cards of your opponent's deck. Put them back on top of your opponent's deck in any order.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Pijako  de votre main sur votre Banc, vous pouvez regarder les 4 cartes du dessus du deck de votre adversaire. Replacez-les au-dessus du deck de votre adversaire dans n'importe quel ordre.",
		}
	}],

	attacks: [{
		name: {
			en: "Search and Escape",
			fr: "Rechercher et s'échapper",
		},
		text: {
			en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Put Chatot G and all cards attached to it on top of your deck. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Placez Pijako  ainsi que toutes les cartes qui lui sont attachées au-dessus de votre deck. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

