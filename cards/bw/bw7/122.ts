import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw7/122/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/122/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/122/high.png",
		},
	},

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

