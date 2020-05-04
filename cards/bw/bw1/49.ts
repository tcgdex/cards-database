import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Musharna",
		fr: "Mushana",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 518,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/49/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/49/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/49/high",
		},
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hypnotic Ray",
			fr: "Onde Hypnotique",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Dream Eater",
			fr: "Dévorêve",
		},
		text: {
			en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
			fr: "Si le Pokémon Défenseur n’est pas Endormi, cette attaque ne fait rien.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
