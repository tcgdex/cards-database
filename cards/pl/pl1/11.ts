import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/11/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/11/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/11/high",
		},
	},

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 239,
		type: AbilityType.POKEBODY,
		name: {
			en: "Electric Barrier",
			fr: "Barrière électrique",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks.",
			fr: "Prévenez tous les dégâts infligés par des attaques à vos Pokémon de Banc (Elecsprint exclus).",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Power Wave",
			fr: "Vague puissante",
		},
		text: {
			en: "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chaque Pokémon possédant des Poké-Powers (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Attract Current",
			fr: "Courant électrique",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
