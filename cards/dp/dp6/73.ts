import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-73",
	localId: 73,

	// Card informations
	name: {
		en: "Swellow",
		fr: "Heledelle",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/73/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/73/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/73/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
		fr: "Schwalbini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",

	abilities: [{
		id: 179,
		type: AbilityType.POKEBODY,
		name: {
			en: "Big Wing",
			fr: "Grande aile",
		},
		text: {
			en: "If Swellow has no Energy attached to it, Swellow's Retreat Cost is 0.",
			fr: "Si Heledelle ne possède pas d'Énergie, son Coût de retraite est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Descent",
			fr: "Mach-attaque",
		},
		text: {
			en: "If Swellow was on your Bench this turn, this attack's base damage is 60 instead of 30.",
			fr: "Si Heledelle se trouve sur votre Banc lors de ce tour, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
