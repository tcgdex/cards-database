import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Chingling",
		'fr-fr': "Korillon",
		'de-de': "Klingplim"
	},

	illustrator: "Emi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		433,
	],

	hp: 40,

	types: [
		"Psychic",
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
				'en-us': "Once during your turn (before your attack), you may put Chimecho from your hand onto Chingling (this counts as evolving Chingling) and remove all damage counters from Chingling.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Éoko de votre main sur Korillon (vous le faites ainsi évoluer) et retirer à Korillon tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Palimpalim von deiner Hand auf Klingplim legen (das zählt als Entwickeln von Klingplim). Entferne alle Schadensmarken von Klingplim."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Inviting Bell",
				'fr-fr': "Cloche tentante",
				'de-de': "Einladender Glockenton"
			},
			effect: {
				'en-us': "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It emits cries by agitating an orb at the back of its throat. It moves with flouncing hops.",
		'fr-fr': "Il émet des cris en agitant l'orbe à l'arrière de sa gorge. Il avance par bonds désordonnés."
	},

	thirdParty: {
		cardmarket: 277671,
		tcgplayer: 84313
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		}
	]
}

export default card
