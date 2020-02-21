import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Dottler",
		fr: "Coléodôme",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/18/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/18/low",
		}
	},

	evolveFrom: {
		en: "Blipbug",
		fr: "Larvadar",
	},

	evolveTo: [{
		en: "Orbeetle",
		fr: "Astronelle",
	}],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 21,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reflect",
			fr: "Protection",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
