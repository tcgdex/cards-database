import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'de-de': "Owei",
		'it-it': "Exeggcute",
		'es-es': "Exeggcute",
		'pt-br': "Exeggcute",
		'es-mx': "Exeggcute"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [102],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Jam-Packed",
			'fr-fr': "À Ras Bord",
			'de-de': "Proppenvoll",
			'it-it': "Pieno Zeppo",
			'es-es': "Atiborrado",
			'pt-br': "Abarrotado",
			'es-mx': "Huevo Relleno"
		},

		effect: {
			'en-us': "Search your deck for a Basic {G} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {G} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{G}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {G} e assegnala a questo Pokémon. Poi rimischia il tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Energia {G} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {G} Básica y únela a este Pokémon. Después, baraja tu mazo."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851075,
				tcgplayer: 654343
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851075,
				tcgplayer: 654343
			}
		},
	],
}

export default card
