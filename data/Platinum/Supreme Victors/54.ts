import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chatot G",
		fr: "Pijako ",
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
			},
			effect: {
				en: "Once during your turn, when you put Chatot G from your hand onto your Bench, you may look at the top 4 cards of your opponent's deck. Put them back on top of your opponent's deck in any order.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Pijako  de votre main sur votre Banc, vous pouvez regarder les 4 cartes du dessus du deck de votre adversaire. Replacez-les au-dessus du deck de votre adversaire dans n'importe quel ordre.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Search and Escape",
				fr: "Rechercher et s'échapper",
			},
			effect: {
				en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Put Chatot G and all cards attached to it on top of your deck. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Placez Pijako  ainsi que toutes les cartes qui lui sont attachées au-dessus de votre deck. Ensuite, mélangez votre deck.",
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
