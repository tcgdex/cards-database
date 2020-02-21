import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-105",
	localId: 105,

	// Card informations
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/105/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/105/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/105/high",
		},
	},

	evolveFrom: {
		fr: "Niveau Sup",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 816,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Time Skip",
			fr: "Petit bond temporel",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent flip 2 coins. If both of them are heads, your turn ends. If both of them are tails, after your opponent draws a card at the beginning of his or her next turn, his or her turn ends. This power can't be used if Dialga is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire de lancer 2 pièces. Si ce sont 2 faces, votre tour se termine. Si ce sont 2 piles, le tour de votre adversaire se termine une fois qu'il a pioché une carte au début de son tour. Ce pouvoir ne peut pas être utilisé si Dialga est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Flash",
			fr: "Flash métallique",
		},
		text: {
			en: "During your next turn, Dialga can't use Metal Flash.",
			fr: "Lors de votre prochain tour, Dialga ne peut pas utiliser Flash métallique.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
