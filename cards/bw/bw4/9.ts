import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-9",
	localId: 9,

	// Card informations
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 591,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/9/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/9/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/9/high.png",
		},
	},

	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1040,
		type: AbilityType.TALENT,
		name: {
			en: "Sporprise",
			fr: "Sporprise",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. If you do, your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser cette capacité spéciale. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
			fr: "Botte Secrète",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card

