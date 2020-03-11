import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-30",
	localId: 30,

	// Card informations
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 615,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/30/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/30/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/30/high",
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
			en: "Call Sign",
			fr: "Signe d’Appel",
		},
		text: {
			en: "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Cryofreeze",
			fr: "Cryogel",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon. The Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
