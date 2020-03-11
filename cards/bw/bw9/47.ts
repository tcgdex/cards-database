import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-47",
	localId: 47,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/47/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/47/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hiroki Asanuma",

	abilities: [{
		id: 113,
		type: AbilityType.TALENT,
		name: {
			en: "Bench Barrier",
			fr: "Barrière de Banc",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon by attacks.",
			fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
