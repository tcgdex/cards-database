import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-36",
	localId: 36,

	// Card informations
	name: {
		en: "Dark Gloom",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/36/high",
		},
	},

	evolveFrom: {
		en: "Oddish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1188,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Pollen Stench",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Confused; if tails, your Active Pokémon is now Confused. This power can't be used if Dark Gloom is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Poisonpowder",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
