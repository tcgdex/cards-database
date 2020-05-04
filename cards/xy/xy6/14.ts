import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-14",
	localId: 14,

	// Card informations
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 662,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/14/high",
		},
	},

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck Off",
			fr: "Picpic Piqueur",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
