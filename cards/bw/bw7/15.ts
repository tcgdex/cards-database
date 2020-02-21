import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-15",
	localId: 15,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/15/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/15/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/15/high",
		},
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fluffy Tag",
			fr: "Accolade Duveteuse",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. During your next turn, the attacks of that Pokémon do 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Pendant votre prochain tour, les attaques du Pokémon échangé infligent 40 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Stun Spore",
			fr: "Para-Spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
