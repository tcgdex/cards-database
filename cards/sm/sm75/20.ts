import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-20",
	localId: 20,

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/20/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1205,
		type: AbilityType.TALENT,
		name: {
			en: "Commotion",
			fr: "Commotion",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on each of your Benched Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur chacun de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wild Tail",
			fr: "Queue Déchaînée",
		},
		text: {
			en: "You may discard any Stadium card in play.",
			fr: "Vous pouvez défausser toute carte Stade en jeu.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
