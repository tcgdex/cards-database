import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Meloetta",
		fr: "Meloetta",
		es: "Meloetta",
		it: "Meloetta",
		pt: "Meloetta",
		de: "Meloetta"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		648,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an das Verteidigende Pokémon angelegte Energie zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
				fr: "Écho",
				de: "Widerhall"
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The melodies sung by Meloetta have the power to make Pokémon that hear them happy or sad.",
		de: "Es besitzt die Macht, Pokémon, die sich in deiner Nähe aufhalten, mit seinen Melodien froh oder traurig zu stimmen."
	},

	thirdParty: {
		cardmarket: 280664,
		tcgplayer: 87299
	}
}

export default card
