import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-27",
	localId: 27,

	// Card informations
	name: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 564,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/27/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/27/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

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
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
