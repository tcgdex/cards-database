import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Munchlax",
		fr: "Goinfrex Niv. 15",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		446,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Snorlax from your hand onto Munchlax (this counts as evolving Munchlax) and remove all damage counters from Munchlax.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex (vous le faites ainsi évoluer) et lui retirer tous ses marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Errand-Running",
				fr: "Rendez-vous",
			},
			effect: {
				en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
