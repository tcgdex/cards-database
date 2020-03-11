import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-2",
	localId: 2,

	// Card informations
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/2/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/2/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/2/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Shake It Off",
			fr: "Bon Débarras",
		},
		text: {
			en: "This attack does 20 damage times the number of Colorless Pokémon your opponent has in play.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Colorless que votre adversaire a en jeu.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
