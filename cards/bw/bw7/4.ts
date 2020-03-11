import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-4",
	localId: 4,

	// Card informations
	name: {
		en: "Bellossom",
		fr: "Joliflor",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 182,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/4/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/4/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/4/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Grass Knot",
			fr: "Nœud Herbe",
		},
		text: {
			en: "Does 20 more damage for each Colorless in the Defending Pokémon's Retreat Cost.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Petal Dance",
			fr: "Danse-Fleur",
		},
		text: {
			en: "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
