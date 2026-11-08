import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Budew",
		'fr-fr': "Rozbouton",
		'de-de': "Knospi"
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
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Roselia from your hand onto Budew (this counts as evolving Budew) and remove all damage counters from Budew.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Roselia de votre main sur Rozbouton (vous le faites ainsi évoluer) et retirer à Rozbouton tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Roselia von deiner Hand auf Knospi legen (das zählt als Entwickeln von Knospi). Entferne alle Schadensmarken von Knospi."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Errand-Running",
				'fr-fr': "Rendez-vous",
				'de-de': "Botengang"
			},
			effect: {
				'en-us': "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
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
		'en-us': "Over the winter, it closes its bud and endures the cold. In spring, the bud opens and releases pollen.",
		'fr-fr': "En hiver, son bourgeon se referme pour résister au froid. Il s'ouvre au printemps et libère du pollen."
	},

	thirdParty: {
		cardmarket: 277542,
		tcgplayer: 84010
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		}
	]
}

export default card
