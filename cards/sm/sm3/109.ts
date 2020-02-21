import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-109",
	localId: 109,

	// Card informations
	name: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 714,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
