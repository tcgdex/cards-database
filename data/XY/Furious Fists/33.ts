import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Thundurus",
		fr: "Fulguris",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		642,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Raging Thunder Punch",
				fr: "Poing-Éclair Déchaîné",
			},
			effect: {
				en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
				fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Slam",
				fr: "Tacle Foudroyant",
			},
			effect: {
				en: "This Pokémon can't use Lightning Slam during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Tacle Foudroyant pendant votre prochain tour.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
