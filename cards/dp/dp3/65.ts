import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-65",
	localId: 65,

	// Card informations
	name: {
		en: "Skiploom",
		fr: "Floravol",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 188,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/65/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/65/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/65/high",
		},
	},

	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 352,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cotton Balloon",
			fr: "Ballon de coton",
		},
		text: {
			en: "If Skiploom has any Grass Energy attached to it, any damage done to Skiploom by attacks from your opponent's Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Si Floravol possède de l'Énergie Grass, tous dégâts qui lui sont infligés par des attaques de Pokémon Évolués de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "U-turn",
			fr: "Demi-tour",
		},
		text: {
			en: "Switch Skiploom with 1 of your Benched Pokémon.",
			fr: "Échangez Floravol avec 1 des Pokémon de votre Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
