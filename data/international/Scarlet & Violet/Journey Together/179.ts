import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brock's Scouting",
		'fr-fr': "Exploration de Pierre",
		'es-es': "Exploración de Brock",
		'de-de': "Rockos Erkundung",
		'it-it': "Ricerca di Brock",
		'pt-br': "Busca do Brock",
		'es-mx': "Expedición de Brock"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 2 Basic Pokémon or 1 Evolution Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base ou un Pokémon Évolutif, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos o 1 Pokémon Evolución, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon oder 1 Entwicklungs-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base o un Pokémon Evoluzione, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 Pokémon Básicos ou 1 Pokémon de Evolução no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos o 1 Pokémon Evolución, muéstralos y ponlos en tu mano. Después, baraja las cartas de tu mazo."
	},

	trainerType: "Supporter",
	regulationMark: "I",
	illustrator: "Teeziro",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817332,
				tcgplayer: 623606
			}
		},
	],
}

export default card
