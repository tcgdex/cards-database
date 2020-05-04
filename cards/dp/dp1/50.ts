import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Haunter",
		fr: "Spectrum",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 93,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/50/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/50/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/50/high",
		},
	},

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hypnosis",
			fr: "Hypnose",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
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
			fr: "Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
