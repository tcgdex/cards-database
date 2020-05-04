import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-122",
	localId: 122,

	// Card informations
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 508,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/122/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/122/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/122/high",
		},
	},

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 429,
		type: AbilityType.TALENT,
		name: {
			en: "Sentinel",
			fr: "Sentinelle",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Supporter cards from his or her hand.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Supporter de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
