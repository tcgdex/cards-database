import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-62",
	localId: 62,

	// Card informations
	name: {
		en: "Gastly",
		fr: "Gastly",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 92,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/62/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/62/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/62/high",
		},
	},

	evolveFrom: {
		fr: "Fantominus",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		name: {
			en: "Pitch-Dark",
			fr: "Noir complet",
		},
		text: {
			en: "You opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Trick Gas",
			fr: "Gaz piégeant",
		},
		text: {
			en: "You may switch Gastly with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Fantominus avec 1 des Pokémon de votre Banc.",
		},
		damage: 10
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
