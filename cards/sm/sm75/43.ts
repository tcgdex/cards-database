import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-43",
	localId: 43,

	// Card informations
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/43/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 815,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Guard",
			fr: "Conservateur d’Énergie",
		},
		text: {
			en: "If this Pokémon has any basic Energy attached to it, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Si de l’Énergie de base est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
