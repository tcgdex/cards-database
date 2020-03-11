import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-75",
	localId: 75,

	// Card informations
	name: {
		en: "Pidgey",
		fr: "Roucool",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 16,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/75/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/75/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



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
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
