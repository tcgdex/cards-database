import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV43",
	localId: "SV43",

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
			en: "https://assets.tcgdex.net/en/sm/sma/SV43/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV43/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV43/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
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
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

