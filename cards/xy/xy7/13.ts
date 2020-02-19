import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy7/13/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/13/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/13/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

