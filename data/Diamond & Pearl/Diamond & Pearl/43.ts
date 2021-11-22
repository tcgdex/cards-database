import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Budew",
		fr: "Rozbouton",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		406,
	],

	hp: 40,

	types: [
		"Grass",
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
				en: "Once during your turn (before your attack), you may put Roselia from your hand onto Budew (this counts as evolving Budew) and remove all damage counters from Budew.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Roselia de votre main sur Rozbouton (vous le faites ainsi évoluer) et retirer à Rozbouton tous ses marqueurs de dégât.",
			},
		},
	],

	attacks: [
		{

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
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "En hiver, son bourgeon se referme pour résister au froid. Il s'ouvre au printemps et libère du pollen."
	}
}

export default card
