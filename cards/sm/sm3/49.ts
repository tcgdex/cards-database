import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-49",
	localId: 49,

	// Card informations
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/49/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/49/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Shadowy Knot",
			fr: "Nœud Sombre",
		},
		text: {
			en: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
