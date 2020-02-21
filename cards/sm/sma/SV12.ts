import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV12",
	localId: "SV12",

	// Card informations
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 657,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV12/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV12/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV12/high",
		},
	},

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},

	abilities: [{
		id: 1181,
		type: AbilityType.TALENT,
		name: {
			en: "Gale Shuriken",
			fr: "Bourrasque Shuriken",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
