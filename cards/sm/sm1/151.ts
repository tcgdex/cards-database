import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-151",
	localId: 151,

	// Card informations
	name: {
		en: "Lapras-GX",
		fr: "Lokhlass-GX",
	},

	hp: 190,

	type: [
		Type.WATER,
	],

	dexId: 131,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/151/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/151/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/151/high",
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
			Type.WATER
		],
		name: {
			en: "Collect",
			fr: "Collecte",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Blizzard Burn",
			fr: "Blizzard Étourdissant",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 160
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Beam-GX",
			fr: "Laser Glace-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
