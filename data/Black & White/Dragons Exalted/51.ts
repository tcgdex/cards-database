import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
		de: "Driftlon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shadow Steal",
				fr: "Vol d'Ombre",
				de: "Schattenklau"
			},
			effect: {
				en: "Does 50 damage times the number of Special Energy cards in your opponent's discard pile.",
				fr: "Inflige 50 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
				de: "Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl der Spezial-Energiekarten im Ablagestapel deines Gegners zu."
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Plentiful Placement",
				fr: "Placement Multiple",
				de: "Reiche Saat"
			},
			effect: {
				en: "Put 4 damage counters on 1 of your opponent's Pokémon.",
				fr: "Placez 4 marqueurs de dégâts sur 1 des Pokémon de votre adversaire.",
				de: "Lege 4 Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "At dusk, swarms of them are carried aloft on winds. When noticed, they suddenly vanish.",
		de: "In der Dämmerung steigen ganze Schwärme in die Lüfte, verschwinden aber sofort, wenn man sie bemerkt."
	},

	thirdParty: {
		cardmarket: 280490,
		tcgplayer: 84949
	}
}

export default card
