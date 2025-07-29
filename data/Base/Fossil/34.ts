import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto",
		de: "Golbat"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Zubat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Flügelschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
				de: "Blutsauger"
			},
			effect: {
				en: "Remove a number of damage counters from Golbat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Golbat has fewer damage counters than that, remove all of them.",
				fr: "Retirez de Nosferalto un nombre de marqueurs de dégâts égal au nombre de dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance.) Si le nombre de marqueurs sur Nosferalto est inférieur à ce résultat, retirez-les tous.",
				de: "Entferne von Golbat Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz abgerechnet wurden). Falls Golbat weniger Schadensmarken als diese Anzahl hat, entferne sie alle."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Une fois son adversaire mordu, il absorbera son énergie même s'il devient trop gros pour voler."
	},

	thirdParty: {
		cardmarket: 273895
	}
}

export default card
