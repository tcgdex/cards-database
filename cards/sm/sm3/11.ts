import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/11/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/11/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/11/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1129,
		type: AbilityType.TALENT,
		name: {
			en: "Guts",
			fr: "Cran",
		},
		text: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Si les dégâts d’une attaque peuvent mettre ce Pokémon K.O., lancez une pièce. Si c’est face, ce Pokémon n’est pas mis K.O., mais il n’a plus que 10 PV.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Pitch",
			fr: "Lancer",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

