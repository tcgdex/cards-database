import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW82",
	localId: "BW82",

	// Card informations
	name: {
		en: "Deoxys-EX",
		fr: "Deoxys ex",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",

	abilities: [{
		id: 1097,
		type: AbilityType.TALENT,
		name: {
			en: "Power Connect",
			fr: "Connexion Renforcée",
		},
		text: {
			en: "Your Team Plasma Pokémon's attacks (excluding Deoxys-EX) do 10 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon de la Team Plasma (excepté Deoxys-EX) infligent 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Helix Force",
			fr: "Force Spirale",
		},
		text: {
			en: "If this Pokémon has any Plasma Energy attached to it, this attack does 30 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
