import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-11",
	localId: 11,

	// Card informations
	name: {
		en: "Rampardos GL",
		fr: "Charkos  Niv. 63",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 409,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/11/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/11/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Trample",
			fr: "Bousculade",
		},
		text: {
			en: "Flip a coin for each Benched Pokémon (both yours and your opponent's). If that coin flip is heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). Si c'est une face, cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rend",
			fr: "Déchirer",
		},
		text: {
			en: "If the Defending Pokémon has any damage counters on it, this attack does 40 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
