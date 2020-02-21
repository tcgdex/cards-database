import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-26",
	localId: 26,

	// Card informations
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 565,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/26/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/26/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/26/high",
		},
	},

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: 787,
		type: AbilityType.TALENT,
		name: {
			en: "Solid Rock",
			fr: "Solide Roc",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, reduce that damage by 50 (after applying Weakness and Resistance).",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, les dégâts sont réduits de 50 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Discard an Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
