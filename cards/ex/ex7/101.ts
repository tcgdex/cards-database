import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-101",
	localId: 101,

	// Card informations
	name: {
		en: "Rocket's Scizor ex",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/101/high",
		},
	},

	evolveFrom: {
		en: "Rocket's Scyther ex",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Hikaru Koike",

	abilities: [{
		id: 230,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dual Armor",
		},
		text: {
			en: "As long as Rocket's Scizor ex has any Metal Energy attached to it, Rocket's Scizor ex is both Darkness and Metal type.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rotating Claws",
		},
		text: {
			en: "You may discard an Energy card attached to Rocket's Scizor ex. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Rocket's Scizor ex.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
