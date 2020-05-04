import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-42",
	localId: 42,

	// Card informations
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/42/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1246,
		type: AbilityType.TALENT,
		name: {
			en: "Blazing Energy",
			fr: "Énergie Ardente",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this Ability. All Energy attached to your Pokémon are Fire Energy instead of their usual type until the end of your turn. (This includes cards that come into play on this turn.)",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Jusqu’à la fin de votre tour, toutes les Énergies attachées à vos Pokémon sont des Énergies Fire au lieu de leur type habituel. (Cela comprend les cartes qui sont mises en jeu pendant ce tour.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Lost Flame",
			fr: "Flamme Perdue",
		},
		text: {
			en: "Put 2 Energy attached to your opponent's Active Pokémon in the Lost Zone.",
			fr: "Placez 2 Énergies attachées au Pokémon Actif de votre adversaire dans la Zone Perdue.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
