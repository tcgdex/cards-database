import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Maractus",
		fr: "Maracachi",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 556,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/12/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/12/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Constant Rattle",
			fr: "Secousses Successives",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage. If 2 of them are heads, this attack does 30 damage. If all of them are heads, this attack does 60 damage.",
			fr: "Lancez 3 pièces. Si vous obtenez un côté face, cette attaque inflige 10 dégâts. Si vous obtenez 2 côtés face, cette attaque inflige 30 dégâts. Si vous obtenez seulement des côtés face, cette attaque inflige 60 dégâts.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Giga Drain",
			fr: "Giga-Sangsue",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
		},
		damage: 50
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
		name: "Black & White",
		code: "bw1"
	}
}

export default card
