import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-66",
	localId: 66,

	// Card informations
	name: {
		en: "Boldore",
		fr: "Géolithe",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 525,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/66/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/66/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/66/high",
		},
	},

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rock Cannon",
			fr: "Canon à Pierres",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
