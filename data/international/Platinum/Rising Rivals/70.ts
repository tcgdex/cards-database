import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Munchlax",
		'fr-fr': "Goinfrex Niv. 15",
		'de-de': "Mampfaxo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [446],

	hp: 70,

	types: [
		"Colorless"
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
				'en-us': "Once during your turn (before your attack), you may put Snorlax from your hand onto Munchlax (this counts as evolving Munchlax) and remove all damage counters from Munchlax.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex (vous le faites ainsi évoluer) et lui retirer tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Relaxo von deiner Hand auf Mampfaxo legen (das zählt als Entwickeln von Mampfaxo). Entferne alle Schadensmarken von Mampfaxo."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Errand-Running",
				'fr-fr': "Rendez-vous",
				'de-de': "Botengang"
			},
			effect: {
				'en-us': "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
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
		'en-us': "It hides food under its long body hair. However, it forgets it has hidden the food."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278644,
				tcgplayer: 87640
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278644,
				tcgplayer: 87640
			}
		},
	],

}

export default card
