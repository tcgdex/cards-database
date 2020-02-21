import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-75",
	localId: 75,

	// Card informations
	name: {
		en: "Raichu-GX",
		fr: "Raichu-GX",
	},

	hp: 210,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/75/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Spark",
			fr: "Étincelle Puissante",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Lightning Energy attached to your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Lightning attachées à vos Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 160
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Voltail-GX",
			fr: "Queue Survoltée-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
