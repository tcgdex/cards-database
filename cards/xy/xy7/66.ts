import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-66",
	localId: 66,

	// Card informations
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/66/high",
		},
	},

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "TOKIYA",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cyber Crush",
			fr: "Cyber Broyage",
		},
		text: {
			en: "Discard all Special Energy attached to each of your opponent's Pokémon.",
			fr: "Défaussez toutes les Énergies spéciales attachées à chacun des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slowing Beam",
			fr: "Rayon Ralentissant",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
