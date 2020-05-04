import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-74",
	localId: 74,

	// Card informations
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 706,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/74/high",
		},
	},

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 760,
		type: AbilityType.TALENT,
		name: {
			en: "Gooey Regeneration",
			fr: "Régénération Visqueuse",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may discard an Energy attached to this Pokémon. If you do, heal 60 damage from this Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, soignez 60 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Whip",
			fr: "Choc-Fouet",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
