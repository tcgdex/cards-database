import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-64",
	localId: 64,

	// Card informations
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/64/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/64/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/64/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, Shelgon's Protect Charge attack's base damage is 80.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Recharge protectrice de Drackhaus sont de 80.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Protect Charge",
			fr: "Recharge protectrice",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Shelgon by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Drackhaus par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
