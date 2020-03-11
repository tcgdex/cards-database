import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-57",
	localId: 57,

	// Card informations
	name: {
		en: "Muk",
		fr: "Grotadmorv",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/57/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/57/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/57/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 545,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sludge Cell",
			fr: "Celllule vaseuse",
		},
		text: {
			en: "If Muk remains affected by any Special Conditions between turns, remove 2 damage counters from Muk.",
			fr: "Au début du tour de chaque joueur, si Grotadmorv est affecté par un État Spécial, retirez-lui 2 marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Strange Poison",
			fr: "Poison étrange",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, Muk is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, Grotadmorv est maintenant Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Strange Sludge",
			fr: "Vase étrange",
		},
		text: {
			en: "If Muk is Poisoned, this attack does 50 damage plus 20 more damage and the Defending Pokémon is now Confused.",
			fr: "Si Grotadmorv est Empoisonné, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
