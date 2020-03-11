import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 683,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/93/high",
		},
	},

	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 92,
		type: AbilityType.TALENT,
		name: {
			en: "Fairy Transfer",
			fr: "Transfert Féérique",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Fairy Energy attached to 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Fairy attachée à l'un de vos Pokémon vers un autre de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
