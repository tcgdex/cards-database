import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 335,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/66/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/66/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 133,
		type: AbilityType.POKEBODY,
		name: {
			en: "Thick Skin",
			fr: "Dur à cuir",
		},
		text: {
			en: "Zangoose can't be affected by any Special Conditions.",
			fr: "Mangriff ne peut pas être affecté par des États Spéciaux.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Invite and Strike",
			fr: "Inviter et frapper",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 20 damage to the new Defending Pokémon.",
			fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige 20 dégâts au nouveau Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chop Up",
			fr: "Découper",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
