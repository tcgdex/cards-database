import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-69",
	localId: 69,

	// Card informations
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 697,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/69/high",
		},
	},

	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",

	abilities: [{
		id: 1145,
		type: AbilityType.TALENT,
		name: {
			en: "Tyrannical Heart",
			fr: "Cœur Tyrannique",
		},
		text: {
			en: "As long as you don't have more Pokémon in play than your opponent, this Pokémon's attacks do 60 more damage (before applying Weakness and Resistance), and it takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Tant que vous n’avez pas plus de Pokémon en jeu que votre adversaire, les attaques de ce Pokémon infligent 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance), et il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
