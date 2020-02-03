import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-104",
	localId: 104,

	// Card informations
	name: {
		en: "Blacephalon",
		fr: "Pierroteknik",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 806,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/104/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/104/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/104/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Fireworks Bomb",
			fr: "Bombe Artifice",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like. If your opponent has exactly 3 Prize cards remaining, put 12 damage counters on them instead.",
			fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. S’il reste exactement 3 cartes Récompense à votre adversaire, placez 12 marqueurs de dégâts à la place.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

