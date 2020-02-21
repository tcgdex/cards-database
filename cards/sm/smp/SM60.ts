import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM60",
	localId: "SM60",

	// Card informations
	name: {
		en: "Charizard-GX",
		fr: "Dracaufeu-GX",
	},

	hp: 250,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM60/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM60/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM60/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 70
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crimson Storm",
			fr: "Tempête Écarlate",
		},
		text: {
			en: "Discard 3 Fire Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies Fire de ce Pokémon.",
		},
		damage: 300
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Out-GX",
			fr: "Déchaînement Furieux-GX",
		},
		text: {
			en: "Discard the top 10 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez les 10 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
