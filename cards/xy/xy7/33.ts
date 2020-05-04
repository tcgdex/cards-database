import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-33",
	localId: 33,

	// Card informations
	name: {
		en: "Claydol",
		fr: "Kaorine",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/33/high",
		},
	},

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Rewind",
			fr: "Rembobinage",
		},
		text: {
			en: "Devolve each of your opponent's evolved Pokémon and put the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
