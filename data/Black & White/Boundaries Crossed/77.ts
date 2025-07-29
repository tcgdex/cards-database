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
			},
			effect: {
				en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
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
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
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

	thirdParty: {
		cardmarket: 280664
	}
}

export default card
