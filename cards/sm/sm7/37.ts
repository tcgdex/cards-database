import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-37",
	localId: 37,

	// Card informations
	name: {
		en: "Lombre",
		fr: "Lombre",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 271,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/37/high",
		},
	},

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 215,
		type: AbilityType.TALENT,
		name: {
			en: "Aqua Lift",
			fr: "Aqua-Élévation",
		},
		text: {
			en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
