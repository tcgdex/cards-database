import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-12",
	localId: 12,

	// Card informations
	name: {
		en: "Braixen",
		fr: "Roussil",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 654,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/12/high",
		},
	},

	evolveFrom: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Destructive Flame",
			fr: "Flamme Destructrice",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crackling Ribbon",
			fr: "Ruban Crépitant",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
