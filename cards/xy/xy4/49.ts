import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-49",
	localId: 49,

	// Card informations
	name: {
		en: "Boldore",
		fr: "Géolithe",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 525,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/49/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/49/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/49/high",
		},
	},

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Core Heal",
			fr: "Soin Viscéral",
		},
		text: {
			en: "Discard a Fighting Energy attached to this Pokémon and heal 50 damage from it.",
			fr: "Défaussez une Énergie Fighting attachée à ce Pokémon et soignez 50 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
