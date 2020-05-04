import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-13",
	localId: 13,

	// Card informations
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/13/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",

	abilities: [{
		id: 1280,
		type: AbilityType.TALENT,
		name: {
			en: "Flare Effect",
			fr: "Effet Flamboyant",
		},
		text: {
			en: "Each of your Stage 1 Pokémon in play is now a Fire Pokémon in addition to its existing types.",
			fr: "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Fire en plus de ses types existants.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Breath",
			fr: "Souffle Ardent",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
