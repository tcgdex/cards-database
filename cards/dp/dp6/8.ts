import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-8",
	localId: 8,

	// Card informations
	name: {
		en: "Luxray",
		fr: "Luxray",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/8/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/8/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/8/high",
		},
	},

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1042,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rivalry",
			fr: "Rivalité",
		},
		text: {
			en: "If your opponent has any Pokémon LV.X in play, each of Luxray's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si votre adversaire possède des Pokémon NIV.X en jeu, chacune des attaques de Luxray inflige 50 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Plasma",
			fr: "Plasma",
		},
		text: {
			en: "Search your discard pile for a Lightning Energy card and attach it to Luxray.",
			fr: "Cherchez dans votre pile de défausse une carte Énergie Lightning et attachez-la à Luxray.",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Shock Bolt",
			fr: "Choc'éclair",
		},
		text: {
			en: "Discard all Lightning Energy attached to Luxray.",
			fr: "Défaussez une Énergie Lightning attachée à Luxray.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
