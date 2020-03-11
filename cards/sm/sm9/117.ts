import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-117",
	localId: 117,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 70,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1361,
		type: AbilityType.TALENT,
		name: {
			en: "Defensive Scales",
			fr: "Écailles Défensives",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.",
			fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
