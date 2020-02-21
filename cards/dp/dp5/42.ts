import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-42",
	localId: 42,

	// Card informations
	name: {
		en: "Mothim",
		fr: "Papilord",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 414,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/42/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/42/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/42/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 472,
		type: AbilityType.POKEBODY,
		name: {
			en: "Disturbance Scales",
			fr: "Écailles tapageuses",
		},
		text: {
			en: "Any damage done by attacks from your Pokémon to the Defending Pokémon isn't affected by Resistance.",
			fr: "Tous dégâts infligés par des attaques de vos Pokémon sur le Pokémon Défenseur ne sont pas affectés par la Résistance.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Get Help",
			fr: "À l'aide",
		},
		text: {
			en: "Does 30 damage times the number of different types of Wormadam on your Bench.",
			fr: "Inflige 30 dégâts multipliés par le nombre de types différents de Cheniselle sur votre Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Touch",
			fr: "Touche rapide",
		},
		text: {
			en: "You may switch Mothim with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Mothim as you like to the new Active Pokémon.",
			fr: "Vous pouvez échanger Papilord avec 1 des Pokémon de votre Banc. Déplacez alors sur le nouveau Pokémon Actif autant de cartes Énergie attachées à Papilord que vous le voulez.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
