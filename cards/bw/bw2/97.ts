import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-97",
	localId: 97,

	// Card informations
	name: {
		en: "Thundurus",
		fr: "Fulguris",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/97/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/97/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge",
			fr: "Chargeur",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Disaster Volt",
			fr: "Éclair Désastre",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
