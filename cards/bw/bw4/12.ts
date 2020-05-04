import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-12",
	localId: 12,

	// Card informations
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/12/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/12/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/12/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1434,
		type: AbilityType.TALENT,
		name: {
			en: "Blazing Mane",
			fr: "Crinière Brûlante",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out),the Attacking Pokémon is now Burned.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Spin",
			fr: "Danseflamme",
		},
		text: {
			en: "Flip a coin. If tails, discard 2 Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
