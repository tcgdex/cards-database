import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-11",
	localId: 11,

	// Card informations
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 421,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/11/high",
		},
	},

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},

	abilities: [{
		id: 1158,
		type: AbilityType.TALENT,
		name: {
			en: "Weather Guard",
			fr: "Protection Météo",
		},
		text: {
			en: "Your Grass Pokémon have no Weakness.",
			fr: "Vos Pokémon Grass n’ont pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
