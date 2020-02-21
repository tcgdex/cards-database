import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-24",
	localId: 24,

	// Card informations
	name: {
		en: "Dewgong",
		fr: "Lamantine",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 87,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/24/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/24/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/24/high",
		},
	},

	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},

	abilities: [{
		id: 70,
		type: AbilityType.POKEBODY,
		name: {
			en: "Thick Fat",
			fr: "Isograisse",
		},
		text: {
			en: "Any damage done to Dewgong by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Lamantine par des attaques de Pokémon Fire et Water sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Shard",
			fr: "Éclats glace",
		},
		text: {
			en: "If the Defending Pokémon is a Fighting Pokémon, this attack's base damage is 80 instead of 30.",
			fr: "Si le Pokémon Défenseur est un Pokémon Fighting, les dégâts de base de cette attaque sont de 80 au lieu de 30.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde boréale",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
