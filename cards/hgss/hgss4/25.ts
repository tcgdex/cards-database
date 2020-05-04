import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-25",
	localId: 25,

	// Card informations
	name: {
		en: "Lunatone",
		fr: "Seleroc",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/25/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/25/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Lunar Blast",
			fr: "Explosion lunaire",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Selfdestruct",
			fr: "Destruction",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Lunatone does 60 damage to itself.",
			fr: "Cette attaque inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Seleroc s'inflige 60 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
