import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-33",
	localId: 33,

	// Card informations
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/33/high",
		},
	},

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 227,
		type: AbilityType.TALENT,
		name: {
			en: "Rough Skin",
			fr: "Peau Dure",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hard Bite",
			fr: "Morsure Profonde",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
