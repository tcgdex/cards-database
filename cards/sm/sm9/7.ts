import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-7",
	localId: 7,

	// Card informations
	name: {
		en: "Parasect",
		fr: "Parasect",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 47,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/7/high",
		},
	},

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},

	abilities: [{
		id: 1357,
		type: AbilityType.TALENT,
		name: {
			en: "Panic Spores",
			fr: "Spores en Panique",
		},
		text: {
			en: "Put 2 damage counters on your opponent's Confused Pokémon between turns.",
			fr: "Placez 2 marqueurs de dégâts sur le Pokémon Confus de votre adversaire entre chaque tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Powder",
			fr: "Poudre Mystérieuse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
