import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-64",
	localId: 64,

	// Card informations
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/64/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/64/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/64/high.png",
		},
	},

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 927,
		type: AbilityType.TALENT,
		name: {
			en: "Daunting Pose",
			fr: "Attitude Patibulaire",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks. Your opponent's attacks and Abilities can't put damage counters on your Benched Pokémon.",
			fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire. Les attaques et les talents de votre adversaire ne peuvent pas placer de marqueurs de dégâts sur vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Cross Chop",
			fr: "Coup-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

