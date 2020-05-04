import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 508,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/105/high",
		},
	},

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ferocious Bellow",
			fr: "Grognement Féroce",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 50 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
