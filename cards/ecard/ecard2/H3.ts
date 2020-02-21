import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H3",
	localId: "H3",

	// Card informations
	name: {
		en: "Ariados",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 168,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H3/high",
		},
	},

	evolveFrom: {
		en: "Spinarak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},

	abilities: [{
		id: 344,
		type: AbilityType.POKEBODY,
		name: {
			en: "Gluey Slime",
		},
		text: {
			en: "As long as Ariados is in play, each player must pay an additional Colorless to retreat his or her Active Pokémon. Gluey Slime can't make a player pay more than an additional Colorless to retreat a Pokémon, even if there is more than 1 Ariados in play.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spider Force",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
