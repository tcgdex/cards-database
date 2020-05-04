import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/8/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/8/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/8/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Nakaoka",

	abilities: [{
		id: 11,
		type: AbilityType.POKEBODY,
		name: {
			en: "Magnetize",
			fr: "Magnétiser",
		},
		text: {
			en: "If you have any Metal Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.",
			fr: "Si votre Pokémon Actif possède des Énergies (M), son Coût de retraite est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Blast",
			fr: "Explosion métallique",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each Metal Energy attached to Magnezone.",
			fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Metal attachée à Magnézone.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
