import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Extra Draw",
				fr: "Pioche supplémentaire"
			},
			effect: {
				en: "If your opponent has any Pokémon-ex in play, search your deck for up to 2 Grass Energy and attach them to Heracross. Shuffle your deck afterward.",
				fr: "Si votre adversaire a des Pokémon-ex en jeu, cherchez dans votre deck jusqu'à 2 cartes Énergie  et attachez-les à Scarhino. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
				fr: "Sonicboom"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
