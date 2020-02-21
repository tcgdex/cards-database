import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-40",
	localId: 40,

	// Card informations
	name: {
		en: "Toxicroak G",
		fr: "Coatox ",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/40/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/40/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 84,
		name: "Ryota Saito"
	},

	abilities: [{
		id: 1122,
		type: AbilityType.POKEBODY,
		name: {
			en: "Anticipation",
			fr: "Anticipation",
		},
		text: {
			en: "Prevent all effects of attacks, excluding damage, done to Toxicroak .",
			fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Coatox .",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Deep Poison",
			fr: "Poison profond",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 40 more damage.",
			fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
