import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cyrano",
		'fr-fr': "Cyano",
		'es-es': "Mirtilo",
		'it-it': "Bluebert",
		'pt-br': "Cyrano",
		'de-de': "Cyano"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 3 Pokémon ex, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon-ex, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon ex, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon-ex, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 Pokémon ex no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon-ex, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794543,
				tcgplayer: 589912
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794543,
				tcgplayer: 589912
			}
		},
	],

	illustrator: "Akira Komayama",

}

export default card
