import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/25/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/25/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hideaki Hakozaki",

	abilities: [{
		id: 747,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Hot Snort",
			fr: "Grognement ardent",
		},
		text: {
			en: "Once during your turn when you put Torkoal from your hand onto your Bench, you may flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Une seule fois pendant votre tour, lorsque vous placez Chartor de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
			fr: "Intimidation",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
