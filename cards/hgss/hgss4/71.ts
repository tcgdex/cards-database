import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-71",
	localId: 71,

	// Card informations
	name: {
		en: "Pidgey",
		fr: "Roucool",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 16,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/71/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/71/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Messenger",
			fr: "Messager",
		},
		text: {
			en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle Pidgey and all cards attached to it back into your deck.",
			fr: "Cherchez un Pokémon dans votre deck, montrez-le à votre adversaire et ajoutez-le à votre main. Mélangez Roucool et toutes les cartes qui lui sont attachées avec votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissade",
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
