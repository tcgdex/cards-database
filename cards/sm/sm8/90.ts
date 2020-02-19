import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-90",
	localId: 90,

	// Card informations
	name: {
		en: "Unown",
		fr: "Zarbi",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/90/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/90/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/90/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 1254,
		type: AbilityType.TALENT,
		name: {
			en: "DAMAGE",
			fr: "DÉGÂTS",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if there are 66 or more damage counters on your Benched Pokémon, you may use this Ability. If you do, you win this game.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si 66 marqueurs de dégâts ou plus sont sur vos Pokémon de Banc, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance Cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

