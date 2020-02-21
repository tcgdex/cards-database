import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-15",
	localId: 15,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/15/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/15/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/15/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 796,
		type: AbilityType.TALENT,
		name: {
			en: "Le Parfum",
			fr: "Parfum",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may search your deck for any card and put it into your hand. Shuffle your deck afterward.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez chercher une carte dans votre deck et l'ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Squeeze",
			fr: "Compression",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
