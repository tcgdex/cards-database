import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Beartic",
		fr: "Polagriffe",
	},
	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		614,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Resolute Claws",
				fr: "Griffes Résolues",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard Burn",
				fr: "Blizzard Étourdissant",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
