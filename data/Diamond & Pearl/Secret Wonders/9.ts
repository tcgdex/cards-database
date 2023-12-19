import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Gastrodon West Sea",
		fr: "Tritosor Mer Occident",
		de: "Gastrodon Westliches Meer"
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
		"Fighting",
	],
	evolveFrom: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Raging Flood",
				fr: "Inondation en furie",
				de: "Tobende Flut"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Gastrodon West Sea. Then, remove 2 damage counters from Gastrodon West Sea.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Tritosor Mer Occident. Ensuite, retirez à Tritosor Mer Occident\n 2 marqueurs de dégât.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Gastrodon Westliches Meer zu. Danach entferne 2 Schadensmarken von Gastrodon Westliches Meer."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Waves",
				fr: "Vagues énormes",
				de: "Stürmische Wellen"
			},
			effect: {
				en: "Put 1 damage counter on each Benched Pokémon (both yours and your opponent's).",
				fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				de: "Lege 1 Schadensmarke auf jedes Pokémon auf der Bank (deine und die deines Gegners)."
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
