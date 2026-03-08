import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		de: "Knakrack"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
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
		fr: "Carmache"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rainbow Scale",
				fr: "Échelle arc-en-ciel",
				de: "Regenbogenschuppe"
			},
			effect: {
				en: "If an Active Pokémon has Weakness to any of the types of Energy attached to Garchomp, Garchomp's attacks do 40 more damage to that Pokémon (before applying Weakness and Resistance). Rainbow Scale Poké-Body can't be used if Garchomp has any Special Energy cards attached to it.",
				fr: "Si un Pokémon Actif possède une Faiblesse à un des types d'Énergies attachés à Carchacrok, les attaques de Carchacrok lui infligent 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Le Poké-Body Échelle arc-en-ciel ne peut pas être utilisé si Carchacrok possède des cartes Énergie Spéciale.",
				de: "Wenn ein Aktives Pokémon eine Schwäche gegenüber einem Energietyp, der an Knakrack angelegt ist, hat, fügen die Angriffe von Knakrack diesem Pokémon 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Diese Poké-Body kann nicht benutzt werden, wenn an Knakrack mindestens 1 Spezialenergiekarte angelegt ist."
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
				fr: "Croc de dragon",
				de: "Drachenzahn"
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
	},

	thirdParty: {
		cardmarket: 277638,
		tcgplayer: 85621
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
