import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY50",
	localId: "XY50",

	// Card informations
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 675,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY50/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY50/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY50/high",
		},
	},

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1249,
		type: AbilityType.TALENT,
		name: {
			en: "Benevolent Boss",
			fr: "Boss Bienveillant",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon, it gets +20 HP for each of your Benched Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif, il reçoit 20 PV pour chacun de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Crazy Knuckle",
			fr: "Poing Fou",
		},
		text: {
			en: "If this Pokémon is affected by a Special Condition, this attack does 40 more damage.",
			fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
