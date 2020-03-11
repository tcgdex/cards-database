import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 601,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/76/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/76/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/76/high",
		},
	},

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1296,
		type: AbilityType.TALENT,
		name: {
			en: "Shift Gear",
		},
		text: {
			en: "As often as you would like during your turn (before your attack), you may move a Metal Energy attached to 1 of your Pokémon to another of your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gear Grind",
			fr: "Lancécrou",
		},
		text: {
			en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
