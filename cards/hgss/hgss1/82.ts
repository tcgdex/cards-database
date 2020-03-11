import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 209,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/82/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/82/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/82/high",
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
			en: "Roar",
			fr: "Hurlement",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc aiguisé",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
