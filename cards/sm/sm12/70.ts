import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-70",
	localId: 70,

	// Card informations
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/70/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Uta",

	abilities: [{
		id: 1316,
		type: AbilityType.TALENT,
		name: {
			en: "Speed Cheer",
			fr: "Bravos Fulgurants",
		},
		text: {
			en: "The attacks of your Pokémon-GX in play that evolve from Eevee cost Colorless less. You can't apply more than 1 Speed Cheer Ability at a time.",
			fr: "Les attaques de vos Pokémon-GX en jeu qui évoluent d’Évoli coûtent Colorless de moins. Vous ne pouvez pas utiliser plus d’un talent Bravos Fulgurants à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
