import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-60",
	localId: 60,

	// Card informations
	name: {
		en: "Suicune-GX",
		fr: "Suicune-GX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1230,
		type: AbilityType.TALENT,
		name: {
			en: "Phantom Winds",
			fr: "Vent Spectral",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may shuffle it and all cards attached to it into your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez le mélanger, ainsi que toutes les cartes qui lui sont attachées, avec votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Cure Stream",
			fr: "Ruisseau Guérisseur",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 120
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Brinicles-GX",
			fr: "Brinicles-GX",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
