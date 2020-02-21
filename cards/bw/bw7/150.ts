import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-150",
	localId: 150,

	// Card informations
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 623,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/150/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/150/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/150/high",
		},
	},

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Devolution Punch",
			fr: "Beigne Dés-évoluante",
		},
		text: {
			en: "Devolve the Defending Pokémon and put the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Faites dés-évoluer le Pokémon Défenseur et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ghost Hammer",
			fr: "Spectro Maillet",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon has no Weakness.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
