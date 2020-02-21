import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/6/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/6/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1118,
		type: AbilityType.POKEBODY,
		name: {
			en: "Time Aura",
			fr: "Aura temporelle",
		},
		text: {
			en: "As long as Dialga is your Active Pokémon, your opponent can't play any Pokémon from his or her hand to evolve his or her Active Pokémon.",
			fr: "Tant que Dialga est votre Pokémon Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Burn",
			fr: "Brûlure métallique",
		},
		text: {
			en: "Discard all Metal Energy attached to Dialga.",
			fr: "Défaussez toutes les Énergies Metal attachées à Dialga.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
