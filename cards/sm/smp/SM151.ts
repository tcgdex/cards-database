import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM151",
	localId: "SM151",

	// Card informations
	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM151/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM151/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM151/high",
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

	abilities: [{
		id: 494,
		type: AbilityType.TALENT,
		name: {
			en: "Distortion Door",
			fr: "Porte Distorsion",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 1 damage counter on 2 of your opponent's Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, placez un marqueur de dégâts sur 2 des Pokémon de Banc de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Impact",
			fr: "Impact Lugubre",
		},
		text: {
			en: "Put 4 damage counters on 1 of your Pokémon.",
			fr: "Placez 4 marqueurs de dégâts sur l’un de vos Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
