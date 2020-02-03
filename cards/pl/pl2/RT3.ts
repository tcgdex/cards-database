import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-RT3",
	localId: "RT3",

	// Card informations
	name: {
		en: "Heat Rotom",
		fr: "Motisma Chaleur Niv. 46",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT3/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT3/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT3/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 104,
		name: "Lee HyunJung"
	},

	abilities: [{
		id: 511,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Heat Shift",
			fr: "Mutation chaleur",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Heat Rotom's type is Fire until the end of your turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Chaleur est de type Fire jusqu'à la fin de votre tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Warm Up",
			fr: "Échauffement",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte Énergie Fire et attachez-la à 1 des Pokémon de votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Burn",
			fr: "Chaleur brûlante",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

