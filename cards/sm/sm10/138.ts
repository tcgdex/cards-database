import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-138",
	localId: 138,

	// Card informations
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},

	hp: 140,

	type: [
		Type.FAIRY,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/138/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/138/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/138/high",
		},
	},

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 490,
		type: AbilityType.TALENT,
		name: {
			en: "Fairy Feast",
			fr: "Festin Féérique",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 30 damage from each of your Fairy Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon Fairy.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
