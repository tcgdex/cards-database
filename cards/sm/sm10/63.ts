import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-63",
	localId: 63,

	// Card informations
	name: {
		en: "Arbok",
		fr: "Arbok",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/63/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Choke",
			fr: "Étouffement Lourd",
		},
		text: {
			en: "If this Pokémon used Wrap during your last turn, this attack does 120 more damage.",
			fr: "Si ce Pokémon a utilisé Ligotage pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
