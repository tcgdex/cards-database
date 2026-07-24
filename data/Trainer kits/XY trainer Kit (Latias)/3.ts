import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Énergie Plante",
		es: "Energía Planta",
		it: "Energia Erba",
		pt: "Energia de Planta",
		de: "Pflanzen-Energie"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	energyType: "Normal",

	hp: 80,
	weaknesses: [
		{
			type: "Fighting",
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch"
			},
			damage: 30
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ultra Energy Source"
			},
			effect: {
				en: "Does 10 damage times the number of basic Energy cards attached to all of the Active Pokémon (both yours and your opponent's)."
			},
			damage: "10x"
		},
	],
	stage: "Stage1",
	types: [
		"Colorless"
	],
	dexId: [301],
	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84737
			}
		},
	],

}

export default card