import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-1",
	localId: 1,

	// Card informations
	name: {
		en: "Arcanine",
		fr: "Arcanin Niv. 53",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/1/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/1/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/1/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 348,
		type: AbilityType.POKEBODY,
		name: {
			en: "Flare Condition",
			fr: "Condition éclatante",
		},
		text: {
			en: "As long as Arcanine has any Fire Energy attached to it, Arcanine has no Weakness.",
			fr: "Tant qu'Arcanin possède de l'Énergie Fire, il ne possède pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Burn Out",
			fr: "Laisser brûler",
		},
		text: {
			en: "You may do 30 damage plus 30 more damage. If you do, Arcanine is now Burned.",
			fr: "Vous pouvez infliger 30 dégâts plus 30 dégâts supplémentaires. Arcanin est alors Brûlé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flames of Rage",
			fr: "Flammes de rage",
		},
		text: {
			en: "Discard a Fire Energy attached to Arcanine. This attack does 60 damage plus 10 more damage for each damage counter on Arcanine.",
			fr: "Défaussez une Énergie Fire attachée à Arcanin. Cette attaque inflige alors 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Arcanin.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
