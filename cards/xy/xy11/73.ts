import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-73",
	localId: 73,

	// Card informations
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 601,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/73/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/73/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/73/high",
		},
	},

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 1437,
		type: AbilityType.TALENT,
		name: {
			en: "Heavy Bumper",
			fr: "Pare-Chocs Imposant",
		},
		text: {
			en: "Any damage done to this Pokémon by an opponent's attack is reduced by 10 for each Colorless in your opponent's Active Pokémon's Retreat Cost (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 10 pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Gear Spinner",
			fr: "Tourne Rouage",
		},
		text: {
			en: "During your next turn, this Pokémon's Gear Spinner attack does 70 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Tourne Rouage de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
