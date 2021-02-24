import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
			},
			effect: {
				en: "Search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck n'importe quelle carte et placez-la dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Pulse",
				fr: "Vibrobscur",
			},
			effect: {
				en: "Does 10 damage times the total amount of Darkness Energy attached to all of your Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies Darkness attachées à tous vos Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
