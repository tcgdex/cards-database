import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-44",
	localId: 44,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/44/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/44/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Enraged Assault",
			fr: "Assaut furieux",
		},
		text: {
			en: "If Vespiquen is on your Bench and has any damage counters on it, this attack does 20 damage plus 60 more damage and the Defending Pokémon is now Poisoned.",
			fr: "Si Apireine se trouve sur votre Banc et a des marqueurs de dégât, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
