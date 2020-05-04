import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-57",
	localId: 57,

	// Card informations
	name: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 33,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/57/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/57/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/57/high",
		},
	},

	evolveFrom: {
		en: "Nidoran?",
		fr: "Nidoran♂",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spirited Drill",
			fr: "Perceuse vigoureuse",
		},
		text: {
			en: "During your next turn, each of Nidorino's attacks does 20 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			fr: "Lors de votre prochain tour, les attaques de Nidorino infligent 20 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Horn",
			fr: "Corne empoisonnée",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
