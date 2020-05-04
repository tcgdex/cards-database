import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-83",
	localId: 83,

	// Card informations
	name: {
		en: "Skarmory FB",
		fr: "Airmure ",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/83/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/83/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Silver Feather",
			fr: "Plume argentée",
		},
		text: {
			en: "During your opponent's next turn, when your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
			fr: "Lors du prochain tour de votre adversaire, lorsque votre adversaire place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Max",
			fr: "Métal max",
		},
		text: {
			en: "Discard all Metal Energy attached to Skarmory FB. Flip a coin for each Energy card you discarded. This attack does 20 damage plus 40 more damage for each heads.",
			fr: "Défaussez toutes les Énergies Metal attachées à Airmure . Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires pour chaque face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
