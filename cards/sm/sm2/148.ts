import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-148",
	localId: 148,

	// Card informations
	name: {
		en: "Turtonator-GX",
		fr: "Boumata-GX",
	},

	hp: 190,

	type: [
		Type.FIRE,
	],

	dexId: 776,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/148/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shell Trap",
			fr: "Carapiège",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
			fr: "Flamme Éclatante",
		},
		text: {
			en: "Discard 2 Fire Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
		},
		damage: 160
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Nitro Tank-GX",
			fr: "Réservoir Nitro-GX",
		},
		text: {
			en: "Attach 5 Fire Energy cards from your discard pile to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
			fr: "Attachez 5 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
