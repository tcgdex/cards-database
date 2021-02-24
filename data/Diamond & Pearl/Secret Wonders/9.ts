import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Gastrodon West Sea",
		fr: "Tritosor Mer Occident",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		423,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Raging Flood",
				fr: "Inondation en furie",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Gastrodon West Sea. Then, remove 2 damage counters from Gastrodon West Sea.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Tritosor Mer Occident. Ensuite, retirez à Tritosor Mer Occident\n 2 marqueurs de dégât.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Waves",
				fr: "Vagues énormes",
			},
			effect: {
				en: "Put 1 damage counter on each Benched Pokémon (both yours and your opponent's).",
				fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
