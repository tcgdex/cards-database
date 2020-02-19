import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Unown A",
		fr: "Zarbi A",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/65/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/65/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/65/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},

	abilities: [{
		id: 233,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Analyze",
			fr: "ANALYSER",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown A is on your Bench, you may look at the top 2 cards of your deck and put them back on top of your deck in any order.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi A est sur votre Banc, vous pouvez regarder les 2 cartes du dessus de votre deck et les replacer au dessus de votre deck dans n'importe quel ordre.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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

