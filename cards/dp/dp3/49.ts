import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-49",
	localId: 49,

	// Card informations
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 83,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/49/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/49/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swords Dance",
			fr: "Danse-lames",
		},
		text: {
			en: "During your next turn, Farfetch'd's Leek Slap attack's base damage is 60.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Coup d'oignon de Canarticho sont de 60.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leek Slap",
			fr: "Coup d'oignon",
		},
		text: {
			en: "During your next turn, Farfetch'd can't use Leek Slap.",
			fr: "Lors de votre prochain tour, Canarticho ne peut pas utiliser Coup d'poireau.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
