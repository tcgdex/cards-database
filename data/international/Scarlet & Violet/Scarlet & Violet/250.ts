import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jacq",
		'fr-fr': "Jacq",
		'es-es': "Cinio",
		'it-it': "Zim",
		'pt-br': "Jacques",
		'de-de': "Jim"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 2 Evolution Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon Évolutifs, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 2 Pokémon Evolución, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due Pokémon Evoluzione, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 Pokémon de Evolução no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Entwicklungs-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Oswaldo KATO",

	thirdParty: {
        cardmarket: 702546,
        tcgplayer: 490289
    }
}

export default card