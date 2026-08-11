import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
		de: "Onix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
				de: "Kreideschrei"
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				fr: "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires au Pokémon Défenseur.",
				de: "Falls bis zum Ende deines nächsten Zugs ein Angriff dem verteidigenden Pokémon Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff dem verteidigenden Pokémon 20 weitere Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Onix.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Onix.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte pro Schadensmarke auf Onix zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "It twists and squirms through the ground. The thunderous roar of its tunneling echoes a long way.",
		fr: "Il serpente et ondule à travers le sol. Le rugissement bruyant de son excavation résonne très loin.",
		de: "Es ringelt und windet sich durch den Boden. Das Donnergrollen seines Tunnelbaus ist als Echo von weither zu vernehmen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274469,
				tcgplayer: 87875
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274469,
				tcgplayer: 87875
			}
		}
	]
}

export default card
