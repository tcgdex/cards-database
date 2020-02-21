import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM185",
	localId: "SM185",

	// Card informations
	name: {
		fr: "Typhlosion",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM185/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM185/high",
		},
	},

	evolveFrom: {
		fr: "Feurisson",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			fr: "Explosible",
		},
		text: {
			fr: "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			fr: "Enfer Explosif",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Promos",
		code: "smp"
	}
}

export default card
