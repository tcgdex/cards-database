import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-74",
	localId: 74,

	// Card informations
	name: {
		en: "White Kyurem-GX",
		fr: "Kyurem Blanc-GX",
	},

	hp: 190,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/74/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/74/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Raging Blade",
			fr: "Lame en Furie",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Nova-GX",
			fr: "Nova Dragon-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned and Paralyzed. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
