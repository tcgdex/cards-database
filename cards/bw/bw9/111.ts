import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-111",
	localId: 111,

	// Card informations
	name: {
		en: "Deoxys-EX",
		fr: "Deoxys-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/111/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/111/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

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

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
