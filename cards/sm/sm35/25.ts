import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-25",
	localId: 25,

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 1143,
		type: AbilityType.TALENT,
		name: {
			en: "Blessings of the Deep",
			fr: "Bénédiction des Profondeurs",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any Water Energy attached to it.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon auquel de l’Énergie Water est attachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
