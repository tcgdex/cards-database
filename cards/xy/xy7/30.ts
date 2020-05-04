import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-30",
	localId: 30,

	// Card informations
	name: {
		en: "Unown",
		fr: "Zarbi",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",

	abilities: [{
		id: 1411,
		type: AbilityType.TALENT,
		name: {
			en: "Farewell Letter",
			fr: "Lettre d'Adieu",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard this Pokémon and all cards attached to it (this does not count as a Knock Out). If you do, draw a card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser ce Pokémon et toutes les cartes qui lui sont attachées (cela n'équivaut pas à un K.O.). Dans ce cas, piochez une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance Cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
