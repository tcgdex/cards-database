import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Melodelfe",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Clefairy",
		fr: "Melofée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metronome",
				fr: "Métronome",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) Clefable performs that attack.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Métronome copie cette attaque, son Coût en Énergie excepté. (Vous devez toujours faire ce que l'attaque indique.) Melodelfe utilise cette attaque.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il joue au bord des lacs déserts les soirs de pleine lune. Rares sont ceux qui l'ont aperçu."
	}
}

export default card
