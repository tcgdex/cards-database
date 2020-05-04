import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-3",
	localId: 3,

	// Card informations
	name: {
		en: "Lileep",
		fr: "Lilia",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 345,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/3/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/3/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: "Suwama Chiaki",

	abilities: [{
		id: 351,
		type: AbilityType.TALENT,
		name: {
			en: "Prehistoric Call",
			fr: "Appel Préhistorique",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez placer ce Pokémon en dessous de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
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

	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
