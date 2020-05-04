import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp3/71/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/71/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuyuki Kano",

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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
