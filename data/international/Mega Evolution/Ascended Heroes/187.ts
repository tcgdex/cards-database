import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fighting Gong",
		'fr-fr': "Gong de Combat",
		'es-es': "Gong de Lucha",
		'es-mx': "Gong de Pelea",
		'de-de': "Kampfgong",
		'it-it': "Gong di Lotta",
		'pt-br': "Gongo de Luta"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Basic {F} Energy card or a Basic {F} Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck une carte Énergie {F} de base ou un Pokémon {F} de base, montrez cette carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 carta de Energía {F} Básica o 1 carta de Pokémon {F} Básico, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		'es-mx': "Busca en tu mazo 1 carta de Energía {F} Básica o 1 carta de Pokémon {F} Básico, muéstrala y ponla en tu mano. Después, baraja tu mazo.",
		'de-de': "Durchsuche dein Deck nach 1 Basis-{F}-Energiekarte oder 1 Basis-{F}-Pokémon, zeige jene Karte deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		'it-it': "Cerca nel tuo mazzo una carta Energia base {F} o un Pokémon Base {F}, mostra la carta e aggiungila a quelle che hai in mano. Poi rimischia il tuo mazzo.",
		'pt-br': "Procure por uma carta de Energia {F} Básica ou por um Pokémon {F} Básico no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869798,
			tcgplayer: 675999
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869798,
			tcgplayer: 675999
		}
	},
],
}

export default card