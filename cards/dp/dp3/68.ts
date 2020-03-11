import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-68",
	localId: 68,

	// Card informations
	name: {
		en: "Unown K",
		fr: "Zarbi K",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/68/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/68/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Ito",

	abilities: [{
		id: 354,
		type: AbilityType.POKEPOWER,
		name: {
			en: "KIND",
			fr: "KATÉGORIE",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 2 damage counters from 1 of the Defending Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 2 marqueurs de dégât à 1 des Pokémon Défenseurs.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 20
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
