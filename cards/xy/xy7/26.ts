import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-26",
	localId: 26,

	// Card informations
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/26/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sanosuke Sakuma",

	abilities: [{
		id: 1283,
		type: AbilityType.TALENT,
		name: {
			en: "Electric Effect",
			fr: "Effet Électrique",
		},
		text: {
			en: "Each of your Stage 1 Pokémon in play is now a Lightning Pokémon in addition to its existing types.",
			fr: "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Lightning en plus de ses types existants.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Blast",
			fr: "Grondement de Tonnerre",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
