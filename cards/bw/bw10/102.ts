import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-102",
	localId: 102,

	// Card informations
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 102,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/102/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/102/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 483,
		type: AbilityType.TALENT,
		name: {
			en: "Propagation",
			fr: "Propagation",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon into your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez ajouter ce Pokémon à votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
