import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-102",
	localId: 102,

	// Card informations
	name: {
		en: "Rocket's Scyther ex",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/102/high",
		},
	},

	evolveFrom: {},

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
			en: "As long as Rocket's Scyther ex has any Grass Energy attached to it, Rocket's Scyther ex is both Grass and Darkness type.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bounce",
		},
		text: {
			en: "After your attack, you may switch Rocket's Scyther ex with 1 of your Benched Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
		},
		text: {
			en: "Rocket's Scyther ex can't use Slashing Strike during your next turn.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
