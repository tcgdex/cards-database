import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV37",
	localId: "SV37",

	// Card informations
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV37/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 154,
		type: AbilityType.TALENT,
		name: {
			en: "Fight Song",
			fr: "Hymne au Combat",
		},
		text: {
			en: "Your Dragon Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
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
