import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		de: "Pantimos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Mime Jr.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Invisible Wall",
				fr: "Mur invisible",
				de: "Unsichtbare Mauer"
			},
			effect: {
				en: "Whenever an attack (including your own) does 30 or more damage to Mr. Mime (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.) This power can't be used if Mr. Mime is Asleep, Confused, or Paralyzed.",
				fr: "Chaque fois qu'une attaque (y compris les vôtres) inflige 30 dégâts ou plus à M. Mime (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque subsiste.) Ce pouvoir ne peut être utilisé si M. Mime est Endormi, Confus ou Paralysé.",
				de: "Immer wenn ein Angriff (auch dein eigener) Pantimos 30 oder mehr Schadenspunkte zufügt (nachdem Schwäche und Resistnz abgerechnet wurden), verhindere diesen Schaden. (Alle anderen Auswirkungen von Agriffen finden immernch statt.) Dies Fähigkeit kann nicht eingesetzt werden, falls Pantimosschlafend, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
				de: "Meditation"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem verteidigendem Pokémon zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Dérangez-le pendant qu'il mime et il se battra en distribuant des volées de claques."
	},

	thirdParty: {
		cardmarket: 273803,
		tcgplayer: 106984
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	],
}

export default card
