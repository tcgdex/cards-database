import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-4",
	localId: 4,

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
			en: "https://assets.tcgdex.net/en/bw/bw9/4/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/4/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",

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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
