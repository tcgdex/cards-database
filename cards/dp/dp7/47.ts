import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-47",
	localId: 47,

	// Card informations
	name: {
		en: "Pupitar",
		fr: "Pupitar",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/47/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/47/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/47/high",
		},
	},

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 577,
		type: AbilityType.POKEBODY,
		name: {
			en: "Energy Protection",
			fr: "Protection d'Énergie",
		},
		text: {
			en: "Any damage done to Pupitar by attacks is reduced by 10 for each Energy attached to Pupitar (after applying Weakness and Resistance). You can't reduce more than 30 damage in this way.",
			fr: "Tous dégâts infligés à Ymphect par des attaques sont réduits de 10 pour chaque Énergie qui lui est attachée (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas réduire de plus de 30 dégâts de cette façon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Smash",
			fr: "Éclate-roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
