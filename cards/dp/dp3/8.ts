import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-8",
	localId: 8,

	// Card informations
	name: {
		en: "Gastrodon East Sea",
		fr: "Tritosor Mer Orient",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 423,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/8/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/8/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/8/high",
		},
	},

	evolveFrom: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kazuyuki Kano",

	abilities: [{
		id: 842,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Osmosis",
			fr: "Pression osmose",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Gastrodon West Sea in play, you may move up to 3 damage counters from Gastrodon East Sea to 1 of your Gastrodon West Sea.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez Tritosor Mer Occident\n en jeu, vous pouvez déplacer jusqu'à 3 marqueurs de dégât de Tritosor Mer Orient\n sur 1 de vos Tritosor Mer Occident\n.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dwindling Wave",
			fr: "Vague diminutrice",
		},
		text: {
			en: "Does 80 damage minus 10 damage for each damage counter on Gastrodon East Sea.",
			fr: "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Tritosor Mer Orient.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
