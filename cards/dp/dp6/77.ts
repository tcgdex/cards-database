import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-77",
	localId: 77,

	// Card informations
	name: {
		en: "Unown R",
		fr: "Zarbi R",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/77/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/77/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 551,
		type: AbilityType.POKEPOWER,
		name: {
			en: "RETIRE",
			fr: "RETIRER",
		},
		text: {
			en: "Once during your turn, if Unown R is on your Bench, you may discard Unown R and all cards attached to it. (This doesn't count as a Knocked Out Pokémon.) Then, draw a card.",
			fr: "Une seule fois lors de votre tour, si Zarbi R est sur votre Banc, vous pouvez défausser Zarbi R ainsi que toutes les cartes qui lui sont attachées. (Le Pokémon n'est pas K.O.) Ensuite, piochez une carte.",
		}
	}],

	attacks: [{
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Move any number of basic Energy cards attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant de cartes Énergie de base attachées à vos Pokémon que vous le voulez sur vos autres Pokémon de la façon que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
