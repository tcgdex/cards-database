import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brilliant Blender",
		'fr-fr': "Mixeur Brillant",
		'es-es': "Batidora Espléndida",
		'it-it': "Mixer Meraviglioso",
		'pt-br': "Liquidificador Perfeito",
		'de-de': "Prächtiger Mixer"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 5 cards and discard them. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 5 cartes, puis défaussez-les. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 5 cartas y descártalas. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a cinque carte e scartale. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 5 cartas no seu baralho e descarte-as. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 5 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794537,
				tcgplayer: 589880
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Toyste Beach",

}

export default card
