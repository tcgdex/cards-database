import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-86",
	localId: 86,

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
			en: "https://assets.tcgdex.net/en/sm/sm1/86/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/86/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {
			en: "Spelunk",
			fr: "Spéléologue",
		},
		text: {
			en: "Look at the top 3 cards of your deck and put them back in any order.",
			fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
		},
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud’Boue",
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
