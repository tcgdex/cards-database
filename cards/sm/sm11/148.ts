import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-148",
	localId: 148,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/148/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/148/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/148/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/148/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 89,
		name: "Sekio"
	},

	abilities: [{
		id: 215,
		type: AbilityType.TALENT,
		name: {
			en: "Aqua Lift",
			fr: "Aqua-Élévation",
		},
		text: {
			en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jump On",
			fr: "Saut",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

