import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-48",
	localId: 48,

	// Card informations
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 680,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/48/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/48/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/48/high",
		},
	},

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Curse of the Blade",
			fr: "Lame Sortilège",
		},
		text: {
			en: "Put 3 damage counters on each of your opponent's Pokémon that has a Pokémon Tool card attached to it.",
			fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel une carte Outil Pokémon est attachée.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
