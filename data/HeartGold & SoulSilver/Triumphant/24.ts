import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		402,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Entrancing Melody",
				fr: "Mélodie envoûtante",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 damage plus 20 more damage. If 2 of them are heads, this attack does 20 damage plus 40 more damage. If all of them are heads, this attack does 20 damage plus 100 more damage.",
				fr: "Lancez 3 pièces. Si vous obtenez une fois un côté face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Si vous obtenez deux fois un côté face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Si vous obtenez chaque fois un côté face, cette attaque inflige 20 dégâts plus 100 dégâts supplémentaires.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
