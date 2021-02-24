import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
	},
	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Memory Melt",
				fr: "Mémoire Déliquescente",
			},
			effect: {
				en: "Look at your opponent's hand and put a card you find there in the Lost Zone.",
				fr: "Regardez la main de votre adversaire et placez une carte que vous y trouvez dans la Zone Perdue.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
