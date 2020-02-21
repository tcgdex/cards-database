import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 771,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},

	abilities: [{
		id: 491,
		type: AbilityType.TALENT,
		name: {
			en: "Innards Out",
			fr: "Expuls’Organes",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 6 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Continuous Tumble",
			fr: "Roulade Continue",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
