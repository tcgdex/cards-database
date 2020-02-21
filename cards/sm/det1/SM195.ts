import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-SM195",
	localId: "SM195",

	// Card informations
	name: {
		fr: "Dracaufeu-GX",
	},

	hp: 250,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM195/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM195/high",
		},
	},

	evolveFrom: {
		fr: "Reptincel",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 198,
		name: "Framestore"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			fr: "Destruction Enragée",
		},
		text: {
			fr: "Défaussez les 8 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Artillerie Vapeur",
		},
		damage: 200
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Flammes Effroyables-GX",
		},
		text: {
			fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 250
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Détective Pikachu",
		code: "det1"
	}
}

export default card
