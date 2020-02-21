import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-82",
	localId: 82,

	// Card informations
	name: {
		en: "Exploud",
		fr: "Brouhabam",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 295,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/82/high",
		},
	},

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cacophony",
			fr: "Cacophonie",
		},
		text: {
			en: "At the end of your opponent's next turn, discard the Defending Pokémon and all cards attached to it.",
			fr: "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
