import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hyper Aroma",
		'fr-fr': "Hyper Arôme",
		'es-es': "Hiperesencia",
		'it-it': "Iperaroma",
		'pt-br': "Hiperaroma",
		'de-de': "Hyperaroma"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 3 Stage 1 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon de Niveau 1, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon de Fase 1, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon di Fase 1, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 Pokémon Estágio 1 no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Phase-1-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769326,
				tcgplayer: 550196
			}
		},
	],

	illustrator: "Toyste Beach",

}

export default card