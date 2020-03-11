import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-7",
	localId: 7,

	// Card informations
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 421,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/7/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/7/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/7/high",
		},
	},

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 1028,
		type: AbilityType.TALENT,
		name: {
			en: "Fair-Weather Heal",
			fr: "Soin des Beaux Jours",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any { Grass } Energy attached to it.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à 1 de vos Pokémon auquel de l'Énergie Grass est attachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Random Peck",
			fr: "Coup d'Bec au Pif",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
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
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
