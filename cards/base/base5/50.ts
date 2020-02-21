import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-50",
	localId: 50,

	// Card informations
	name: {
		en: "Charmander",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 4,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1190,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Gather Fire",
		},
		text: {
			en: "Once during your turn (before your attack), you may take 1 Fire Energy card attached to 1 of your other Pokémon and attach it to Charmander. This power can't be used if Charmander is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Tail",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
