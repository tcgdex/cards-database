import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-118",
	localId: 118,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/118/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/118/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/118/high",
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
		id: 503,
		type: AbilityType.TALENT,
		name: {
			en: "Plump Body",
			fr: "Corps Dodu",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
