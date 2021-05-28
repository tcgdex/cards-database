import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		464,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Blast",
				fr: "Boule Roc",
			},
			effect: {
				en: "Flip a coin for each Fighting Energy attached to this Pokémon. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie Fighting attachée à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Wrecker",
				fr: "Roc-Boulet",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance. This Pokémon can't attack during your next turn.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
