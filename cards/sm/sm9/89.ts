import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-89",
	localId: 89,

	// Card informations
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 92,
		name: "HYOGONOSUKE"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spirit Compressor",
			fr: "Réducteur d’Âmes",
		},
		text: {
			en: "Search your deck for up to 4 Pokémon and discard them. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 4 Pokémon dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
		},
		damage: 20
	}],





	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
