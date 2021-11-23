import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Gabite",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rainbow Scale",
				fr: "Échelle arc-en-ciel"
			},
			effect: {
				en: "If an Active Pokémon has Weakness to any of the types of Energy attached to Garchomp, Garchomp's attacks do 40 more damage to that Pokémon (before applying Weakness and Resistance). Rainbow Scale Poké-Body can't be used if Garchomp has any Special Energy cards attached to it.",
				fr: "Si un Pokémon Actif possède une Faiblesse à un des types d'Énergies attachés à Carchacrok, les attaques de Carchacrok lui infligent 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Le Poké-Body Échelle arc-en-ciel ne peut pas être utilisé si Carchacrok possède des cartes Énergie Spéciale."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Fang",
				fr: "Croc de dragon"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],

	description: {
		fr: "Quand il se recroqueville et étend ses ailes, on dirait un chasseur. Sa vitesse est supersonique."
	}
}

export default card
