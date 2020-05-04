import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Hippowdon",
		fr: "Hippodocus Niv. 48",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 450,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/25/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/25/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/25/high",
		},
	},

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomoaki Imakuni",

	abilities: [{
		id: 367,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sand Cover",
			fr: "Couverture de sable",
		},
		text: {
			en: "As long as Hippowdon is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon LV.X between turns.",
			fr: "Tant qu'Hippodocus est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon LV.X de votre adversaire entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Save Sand",
			fr: "Sauve-sable",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to Hippowdon. Before doing damage, you may search your discard pile for a Fighting Energy card and attach it to Hippowdon.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Hippodocus. Avant d'infliger des dégâts, vous pouvez chercher une carte Énergie Fighting dans votre pile de défausse et l'attacher à Hippodocus.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Groundquake",
			fr: "Tremblement de sol",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon that isn't an Evolved Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc n'étant pas un Pokémon Évolué (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
