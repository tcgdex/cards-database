import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-68",
	localId: 68,

	// Card informations
	name: {
		en: "Misdreavus",
		fr: "Misdreavus",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/68/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/68/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/68/high",
		},
	},

	evolveFrom: {
		fr: "Feuforêve",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		name: {
			en: "Lullaby",
			fr: "Comptine",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Nightmare Feast",
			fr: "Festin cauchemardesque",
		},
		text: {
			en: "If the Defending Pokémon is Asleep, this attack does 50 damage and remove 5 damage counters from Misdreavus. If the Defending Pokémon is not Asleep, this attack does nothing.",
			fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts et retire à Feuforêve 5 marqueurs de dégât. Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
