import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Regice Star",
		fr: "Regice ☆"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		378,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Barrier",
				fr: "Barrière de glace"
			},
			effect: {
				en: "Prevent all effects of an attack, including damage, done to Regice Star by your opponent's Pokémon-ex during your opponent's next turn.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Regice  par le Pokémon-ex de votre adversaire lors du prochain tour de votre adversaire."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Final Blizzard",
				fr: "Blizzard final"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left and Regice Star is the only Pokémon you have in play, this attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "S'il reste à votre adversaire une seule carte Récompense et que Regice  est le seul Pokémon que vous ayez en jeu, cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 30,

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
