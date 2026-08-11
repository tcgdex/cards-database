import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Mantyke",
		'fr-fr': "Babimanta",
		'de-de': "Mantirps"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		458,
	],

	hp: 40,

	types: [
		"Water",
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
				'en-us': "Once during your turn (before your attack), you may put Mantine from your hand onto Mantyke (this counts as evolving Mantyke) and remove all damage counters from Mantyke.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Demanta de votre main sur Babimanta (vous le faites ainsi évoluer) et retirer à Babimanta tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Mantax von deiner Hand auf Mantirps legen (das zählt als Entwickeln von Mantirps). Entferne alle Schadensmarken von Mantirps."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Call for Friends",
				'fr-fr': "À la rescousse!",
				'de-de': "Freundesruf"
			},
			effect: {
				'en-us': "Search your deck for a  grass Basic Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck un Pokémon de Base Water, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer -Basis-Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A friendly Pokémon that captures the subtle flows of seawater using its two antennae.",
		'fr-fr': "Un Pokémon amical qui analyse les mouvements subtils de l'eau de mer grâce à ses deux antennes."
	},

	thirdParty: {
		cardmarket: 277554,
		tcgplayer: 87186
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
