import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},
	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Zappy Pom-Poms",
				fr: "Pom-Poms Électrisants",
			},
			effect: {
				en: "This attack does 30 damage to each Pokémon-GX and Pokémon-EX (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chaque Pokémon-GX et Pokémon-EX (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
