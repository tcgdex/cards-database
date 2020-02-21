import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV13",
	localId: "SV13",

	// Card informations
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 100,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 745,
		type: AbilityType.TALENT,
		name: {
			en: "Floating Electrons",
			fr: "Électrons Flottants",
		},
		text: {
			en: "If this Pokémon has any Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Shock",
			fr: "Éclair",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
