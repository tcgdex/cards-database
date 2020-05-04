import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-6",
	localId: 6,

	// Card informations
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/6/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/6/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/6/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "match",

	abilities: [{
		id: 1100,
		type: AbilityType.POKEBODY,
		name: {
			en: "Pheromone Stamina",
			fr: "Endurance aux phéromones",
		},
		text: {
			en: "Nidoking gets +20 HP for each Nidoqueen you have in play.",
			fr: "Nidoking reçoit +20 PV pour chacun de vos Nidoqueen en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venomous Horn",
			fr: "Corne venimeuse",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
