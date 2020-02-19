import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-43",
	localId: 43,

	// Card informations
	name: {
		en: "Wormadam Trash Cloak",
		fr: "Cheniselle Cape Déchet",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/43/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/43/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/43/high.png",
		},
	},

	evolveFrom: {
		en: "Burmy Trash Cloak",
		fr: "Cheniti Cape Déchet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},

	abilities: [{
		id: 888,
		type: AbilityType.POKEBODY,
		name: {
			en: "Trash Cloak",
			fr: "Cape déchet",
		},
		text: {
			en: "If Wormadam Trash Cloak has a Pokémon Tool card attached to it, any damage done to Wormadam Trash Cloak by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Si Cheniselle Cape Déchet  possède une carte Outil Pokémon, tous dégâts qui lui sont infligés par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Iron Tackle",
			fr: "Charge de fer",
		},
		text: {
			en: "Wormadam Trash Cloak does 20 damage to itself.",
			fr: "Cheniselle Cape Déchet s'inflige 20 dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

