import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/28/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/28/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pitch",
			fr: "Lancer",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Horn Slash",
			fr: "Tranch'korne",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
