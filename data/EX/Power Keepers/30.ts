import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synergy Effect",
				fr: "Effet synergie"
			},
			effect: {
				en: "If Glacia's Stadium is in play, any damage done to Glalie by attacks from your opponent's Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Si Stade de Glacia est en jeu, tous dégâts infligés à Oniglali par des attaques de Pokémon de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès"
			},
			effect: {
				en: "Glalie does 10 damage to itself.",
				fr: "Oniglali s'inflige 10 dégâts."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
