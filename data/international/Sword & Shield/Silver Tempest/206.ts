import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lance",
		'fr-fr': "Peter",
		'es-es': "Lance",
		'it-it': "Lance",
		'pt-br': "Lance",
		'de-de': "Siegfried"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 3 Dragon Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon Dragon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon Dragon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Dragon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 Pokémon Dragon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Dragon-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 682255,
				tcgplayer: 452002
			}
		},
	],
}

export default card
