import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Mantyke",
		fr: "Babimanta",
		de: "Mantirps"
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
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Mantine from your hand onto Mantyke (this counts as evolving Mantyke) and remove all damage counters from Mantyke.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Demanta de votre main sur Babimanta (vous le faites ainsi évoluer) et retirer à Babimanta tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Mantax von deiner Hand auf Mantirps legen (das zählt als Entwickeln von Mantirps). Entferne alle Schadensmarken von Mantirps."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Call for Friends",
				fr: "À la rescousse!",
				de: "Freundesruf"
			},
			effect: {
				en: "Search your deck for a  grass Basic Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un Pokémon de Base Water, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer -Basis-Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
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
		fr: "Un Pokémon amical qui analyse les mouvements subtils de l'eau de mer grâce à ses deux antennes."
	},

	thirdParty: {
		cardmarket: 277554,
		tcgplayer: 87186
	}
}

export default card
