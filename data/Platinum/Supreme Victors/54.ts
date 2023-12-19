import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chatot G",
		fr: "Pijako ",
		de: "Plaudagei G"
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		441,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Disrupting Spy",
				fr: "Espion dérangeant",
				de: "Störender Spion"
			},
			effect: {
				en: "Once during your turn, when you put Chatot G from your hand onto your Bench, you may look at the top 4 cards of your opponent's deck. Put them back on top of your opponent's deck in any order.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Pijako  de votre main sur votre Banc, vous pouvez regarder les 4 cartes du dessus du deck de votre adversaire. Replacez-les au-dessus du deck de votre adversaire dans n'importe quel ordre.",
				de: "Einmal während deines Zuges kannst du dir, wenn du Plaudagei G von deiner Hand auf deine Bank legst, die obersten 4 Karten des Decks deines Gegners anschauen. Lege die Karten in beliebiger Reihenfolge auf das Deck deines Gegners zurück."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Search and Escape",
				fr: "Rechercher et s'échapper",
				de: "Suchen und Entkommen"
			},
			effect: {
				en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Put Chatot G and all cards attached to it on top of your deck. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Placez Pijako  ainsi que toutes les cartes qui lui sont attachées au-dessus de votre deck. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Lege Plaudagei G und alle an es angelegten Karten auf dein Deck zurück. Mische dein Deck danach."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
