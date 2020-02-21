import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-80",
	localId: 80,

	// Card informations
	name: {
		en: "Eevee",
		fr: "Évoli",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 186,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Evolution",
			fr: "Évolution de l'Énergie",
		},
		text: {
			en: "When you attach a basic Energy card from your hand to this Pokémon, you may search your deck for a card that evolves from this Pokémon that is the same type as that Energy card and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
			fr: "Lorsque vous attachez une carte Énergie de base de votre main à ce Pokémon, vous pouvez chercher dans votre deck une carte Évolution de ce Pokémon du même type que la carte Énergie et la placer sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
