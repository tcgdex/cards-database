import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-78",
	localId: 78,

	// Card informations
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/78/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/78/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		name: {
			en: "Iron Head",
			fr: "Tête de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 10 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
