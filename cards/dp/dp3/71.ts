import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-71",
	localId: 71,

	// Card informations
	name: {
		en: "Unown X",
		fr: "Zarbi X",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/71/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/71/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/71/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},

	abilities: [{
		id: 356,
		type: AbilityType.POKEPOWER,
		name: {
			en: "X-RAY",
			fr: "X-RAY",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Unown X on your Bench, you may look at the top card of your opponent's deck and put it back on top of his or her deck.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi X est sur votre Banc, vous pouvez regarder la carte du dessus du deck de votre adversaire et la replacer au dessus de son deck.",
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
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
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
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

