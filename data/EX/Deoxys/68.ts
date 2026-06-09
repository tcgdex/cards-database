import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dense",
				fr: "Épais",
				de: "Dense"
			},
			effect: {
				en: "Any damage done to Numel by attacks from Evolved Pokémon (both yours and your opponent's) is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Les dégâts infligés à Chamallot par des attaques de Pokémon Évolués (les vôtres et ceux de votre adversaire) sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Any damage done to Numel by attacks from Evolved Pokémon (both yours and your opponent's) is reduced by 20 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ram"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 87809,
		cardmarket: 276471
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
