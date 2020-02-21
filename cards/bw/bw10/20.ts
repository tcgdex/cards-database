import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-20",
	localId: 20,

	// Card informations
	name: {
		en: "Suicune",
		fr: "Suicune",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/20/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/20/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/20/high",
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
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
			fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par des Pokémon-EX.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
