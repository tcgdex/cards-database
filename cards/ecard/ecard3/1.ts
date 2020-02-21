import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-1",
	localId: 1,

	// Card informations
	name: {
		en: "Aerodactyl",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},

	abilities: [{
		id: 420,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Ancient Wind",
		},
		text: {
			en: "Once during your turn (before you attack) if Aerodactyl is your Active Pokémon, you may ignore all Poké-Bodies until the end of your turn. This power can't be used if Aerodactyl is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
