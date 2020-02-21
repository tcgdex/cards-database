import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 402,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/4/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/4/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/4/high",
		},
	},

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "White Noise",
			fr: "Sommeil Profond",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Draining Cut",
			fr: "Vampitranche",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads. Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
