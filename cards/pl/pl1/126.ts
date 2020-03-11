import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-126",
	localId: 126,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/126/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/126/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 342,
		type: AbilityType.POKEBODY,
		name: {
			en: "Thankfulness",
			fr: "Gratitude",
		},
		text: {
			en: "Each of your Grass Pokémon (excluding any Shaymin) gets +40 HP. You can't use more than 1 Thankfulness Poké-Body each turn.",
			fr: "Chacun de vos Pokémon Grass (les Shaymin exclus) obtient 40 PV supplémentaires. Vous ne pouvez pas utiliser plus d'1 Poké-Body Gratitude par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Flare",
			fr: "Fulmigraine",
		},
		text: {
			en: "Choose as many Grass Energy cards from your hand as you like and attach them to your Pokémon in any way you like. If you do, this attack does 40 damage plus 20 more damage for each Grass Energy attached in this way.",
			fr: "Choisissez autant de cartes Énergie Grass de votre main que vous voulez et attachez-les à vos Pokémon de la façon que vous voulez. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Grass attachée de cette façon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
