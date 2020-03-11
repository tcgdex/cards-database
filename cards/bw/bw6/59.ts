import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-59",
	localId: 59,

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
			en: "https://assets.tcgdex.net/en/bw/bw6/59/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/59/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/59/high",
		},
	},

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryo Ueda",



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
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
