import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ursaring",
		de: "Ursaring"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		217,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Teddiursa",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bear Hug",
				de: "Umklammerung"
			},
			effect: {
				en: "The Defending Pokémon can't Retreat during your opponent's next turn.",
				de: "Das verteidigende Pokémon kann sich im nächsten Zug deines gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
				de: "Zerreißen"
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 40 damage plus 20 more damage. If not, this attack does 40 damage.",
				de: "Liegen auf dem verteidigenden Pokémon bereits Schadensmarken, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu. Sonnst fügt dieser Angriff 40 Schadenspunkte zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
