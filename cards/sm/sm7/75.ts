import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-75",
	localId: 75,

	// Card informations
	name: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/75/high",
		},
	},

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Skull Bash",
			fr: "Coud’Krâne",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Dust Devil",
			fr: "Tempête de Sable",
		},
		text: {
			en: "This attack does 20 damage to each non-Fighting Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chaque Pokémon qui n’est pas un Pokémon Fighting (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
