import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-72",
	localId: 72,

	// Card informations
	name: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 418,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/72/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/72/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Splash About",
			fr: "Grosse trempette",
		},
		text: {
			en: "If Buizel has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
			fr: "Si Mustébouée possède moins d'Énergies que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
