import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY130",
	localId: "XY130",

	// Card informations
	name: {
		en: "Tyranitar",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY130/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},

	abilities: [{
		id: 1318,
		type: AbilityType.TALENT,
		name: {
			en: "Raging Roar",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may attach 1 Darkness Energy from your discard pile to this Pokémon for each Prize card your opponent has taken.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dark Mountain",
		},
		text: {
			en: "Discard the top 2 cards of your deck. This attack does 50 more damage for each Supporter card discarded in this way.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
