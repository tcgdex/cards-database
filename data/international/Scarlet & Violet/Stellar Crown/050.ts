import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [595],
	set: Set,

	name: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'es-es': "Joltik",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'de-de': "Wattzapf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Jolting Charge",
			'fr-fr': "Recharge Statique",
			'es-es': "Jolgorio de Voltios",
			'it-it': "Scossacarica",
			'pt-br': "Carga Eletrizante",
			'de-de': "Wattladung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {G} Energy cards and up to 2 Basic {L} Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {G} de base et jusqu'à 2 cartes Énergie {L} de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {G} Básica y hasta 2 cartas de Energía {L} Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {G} e fino a due carte Energia base {L} e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {G} Básica e até 2 cartas de Energia {L} Básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{G}-Energiekarten und bis zu 2 Basis-{L}-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785904,
				tcgplayer: 567276
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785904,
				tcgplayer: 567276
			}
		},
	],

	illustrator: "Nisota Niso",

}

export default card
