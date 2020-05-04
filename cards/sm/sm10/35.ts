import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-35",
	localId: 35,

	// Card informations
	name: {
		en: "Blastoise-GX",
		fr: "Tortank-GX",
	},

	hp: 240,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/35/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/35/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/35/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "sadaji",

	abilities: [{
		id: 75,
		type: AbilityType.TALENT,
		name: {
			en: "Solid Shell",
			fr: "Coquille Dure",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Rocket Splash",
			fr: "Canon Éclaboussant",
		},
		text: {
			en: "Shuffle any amount of Water Energy from your Pokémon into your deck. This attack does 60 damage for each card you shuffled into your deck in this way.",
			fr: "Mélangez autant d’Énergies Water que vous le voulez de vos Pokémon avec votre deck. Cette attaque inflige 60 dégâts pour chaque carte mélangée avec votre deck de cette façon.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Giant Geyser-GX",
			fr: "Geyser Géant-GX",
		},
		text: {
			en: "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
			fr: "Attachez autant de cartes Énergie Water que vous le voulez de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
