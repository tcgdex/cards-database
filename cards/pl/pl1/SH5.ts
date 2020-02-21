import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-SH5",
	localId: "SH5",

	// Card informations
	name: {
		en: "Swablu",
		fr: "Tylton",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 333,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/SH5/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/SH5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/SH5/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/SH5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {
			en: "Roost",
			fr: "Atterrissage",
		},
		text: {
			en: "Remove 4 damage counters from Swablu. Swablu can't retreat during your next turn.",
			fr: "Retirez à Tylton 4 marqueurs de dégât. Tylton ne peut pas battre en retraite lors de votre prochain tour.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mirror Move",
			fr: "Mimique",
		},
		text: {
			en: "If Swablu was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Swablu to the Defending Pokémon.",
			fr: "Si une attaque a infligé des dégâts à Tylton lors du tour précédent de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fury Attack",
			fr: "Furie",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
