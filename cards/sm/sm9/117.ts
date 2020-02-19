import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm9/117/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/117/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/117/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

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

