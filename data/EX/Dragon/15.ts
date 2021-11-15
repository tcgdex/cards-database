import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Guard",
				fr: "Défense de sable"
			},
			effect: {
				en: "Whenever Flygon would be damaged by your opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 20.",
				fr: "Lorsqu'une attaque de votre adversaire inflige des dégâts à Libegon (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, les dégâts sont réduits de 20."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Tranch'air"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy card attached to Flygon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à Libegon."
			},
			damage: 60,

		},
	],






}

export default card
