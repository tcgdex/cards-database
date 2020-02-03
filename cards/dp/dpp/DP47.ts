import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP47",
	localId: "DP47",

	// Card informations
	name: {
		en: "Rayquaza C",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP47/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],



	abilities: [{
		id: 205,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dragon Spirit",
		},
		text: {
			en: "If Rayquaza  is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza .",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Final Blowup",
		},
		text: {
			en: "Discard all Energy attached to Rayquaza . Ignore this effect if you have no cards in your hand.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card

