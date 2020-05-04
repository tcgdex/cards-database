import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-20",
	localId: 20,

	// Card informations
	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 411,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/20/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/20/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/20/high",
		},
	},

	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 1119,
		type: AbilityType.POKEBODY,
		name: {
			en: "Metal Trait",
			fr: "Trait métallique",
		},
		text: {
			en: "As long as Bastiodon has a Pokémon Tool attached to it, remove 1 damage counter from Bastiodon between turns.",
			fr: "Tant que Bastiodon possède un Outil Pokémon, retirez-lui 1 marqueur de dégât entre 2 tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Iron Defense",
			fr: "Mur de fer",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Bastiodon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Bastiodon lors du prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Tackle",
			fr: "Charge de fer",
		},
		text: {
			en: "Bastiodon does 30 damage to itself.",
			fr: "Bastiodon s'inflige 30 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
