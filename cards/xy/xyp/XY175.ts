import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY175",
	localId: "XY175",

	// Card informations
	name: {
		en: "Magearna-EX",
	},

	hp: 160,

	type: [
		Type.METAL,
	],

	dexId: 801,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY175/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY175/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 549,
		type: AbilityType.TALENT,
		name: {
			en: "Mystic Heart",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Metal Energy attached to it. (Existing effects are not removed.)",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Soul Blaster",
		},
		text: {
			en: "During your next turn, this Pokémon's Soul Blaster attack's base damage is 60.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
