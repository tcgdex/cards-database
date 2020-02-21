import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-63",
	localId: 63,

	// Card informations
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/63/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/63/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/63/high",
		},
	},

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Fake Out",
			fr: "Bluff",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pivot Throw",
			fr: "Lancer Tournant",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is increased by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont augmentés de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
