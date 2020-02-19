import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp3/49/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/49/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/49/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

