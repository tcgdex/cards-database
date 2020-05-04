import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-42",
	localId: 42,

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/42/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/42/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Diminutive Desire",
			fr: "Infimreket",
		},
		text: {
			en: "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
			fr: "Regardez les 7 cartes du dessus de votre deck et ajoutez 1 d'entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Doom Desire",
			fr: "Carnareket",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Défenseur est mis K.O. à la fin du prochain tour de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
