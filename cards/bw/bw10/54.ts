import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-54",
	localId: 54,

	// Card informations
	name: {
		en: "Archeops",
		fr: "Aéroptéryx",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 567,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/54/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/54/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/54/high",
		},
	},

	evolveFrom: {
		en: "Archen",
		fr: "Arkéapti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Swift Dive",
			fr: "Vive Plongée",
		},
		text: {
			en: "If this Pokémon's remaining HP is 50 or less, this attack's base damage is 50.",
			fr: "S'il reste 50 PV ou moins à ce Pokémon, les dégâts de base de cette attaque sont de 50.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
