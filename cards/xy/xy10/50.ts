import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-50",
	localId: 50,

	// Card informations
	name: {
		en: "Carbink",
		fr: "Strassie",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 703,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/50/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/50/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 148,
		type: AbilityType.TALENT,
		name: {
			en: "Safeguard",
			fr: "Rune Protect",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-EX.",
			fr: "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-EX de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
