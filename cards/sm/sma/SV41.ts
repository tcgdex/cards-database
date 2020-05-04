import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV41",
	localId: "SV41",

	// Card informations
	name: {
		en: "Eevee",
		fr: "Évoli",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 186,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Evolution",
			fr: "Évolution de l'Énergie",
		},
		text: {
			en: "When you attach a basic Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon that is the same type as that Energy card and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Lorsque vous attachez pendant votre tour une carte Énergie de base de votre main à ce Pokémon, vous pouvez chercher dans votre deck une carte qui est l’évolution de ce Pokémon et du même type que cette carte Énergie. Mettez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Draw",
			fr: "Pioche Rapide",
		},
		text: {
			en: "Flip a coin. If heads, draw a card.",
			fr: "Lancez une pièce. Si c’est face, piochez une carte.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
