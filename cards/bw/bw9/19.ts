import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-19",
	localId: 19,

	// Card informations
	name: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/19/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/19/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/19/high",
		},
	},

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Smokescreen",
			fr: "Brouillard",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
