import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Venusaur",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/68/high",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},

	abilities: [{
		id: 766,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Harvest Bounty",
		},
		text: {
			en: "Once during your turn (before you attack), If you attach an Energy card from your hand to your Active Pokémon as part of your turn, you may attach an additional Energy card to that Pokémon at the same time. This power can't be used if Venusaur is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
