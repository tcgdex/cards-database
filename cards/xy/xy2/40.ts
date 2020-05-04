import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/40/high",
		},
	},

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Suwama Chiaki",

	abilities: [{
		id: 1403,
		type: AbilityType.TALENT,
		name: {
			en: "Shadow Void",
			fr: "Crevasse d'Ombre",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to this Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon vers ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pain Pellets",
			fr: "Points de Douleur",
		},
		text: {
			en: "Put damage counters on 1 of your opponent's Pokémon equal to the number of damage counters on this Pokémon.",
			fr: "Placez autant de marqueurs de dégâts sur l'un des Pokémon de votre adversaire qu'il y a de marqueurs de dégâts sur ce Pokémon.",
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

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
