import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-107",
	localId: 107,

	// Card informations
	name: {
		en: "Alolan Exeggutor-GX",
		fr: "Noadkoko d’Alola-GX",
	},

	hp: 220,

	type: [
		Type.DRAGON,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/107/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tropical Head",
			fr: "Tête Tropicale",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to this Pokémon to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Hammer",
			fr: "Draco-Marteau",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 120
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tower-Go-Round-GX",
			fr: "Manège Dominant-GX",
		},
		text: {
			en: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
			fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez sur vos autres Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
