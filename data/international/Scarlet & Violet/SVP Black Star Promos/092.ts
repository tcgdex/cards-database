import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		'en-us': "Miraidon",
		'fr-fr': "Miraidon",
		'es-es': "Miraidon",
		'it-it': "Miraidon",
		'pt-br': "Miraidon",
		'de-de': "Miraidon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peak Acceleration",
			'fr-fr': "Accélération Maximale",
			'es-es': "Aceleración Máxima",
			'it-it': "Accelerazione Massima",
			'pt-br': "Aceleração Máxima",
			'de-de': "Höchstbeschleunigung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards and attach them to your Future Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon Temps futur comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon del futuro de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon Tempo Futuro nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon Futuristas como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon aus der Zukunft an. Mische anschließend dein Deck."
		},

		damage: 40
	}, {
		cost: ["Lightning", "Lightning", "Psychic"],

		name: {
			'en-us': "Sparking Strike",
			'fr-fr': "Frappe Étincelante",
			'es-es': "Golpe Chispeante",
			'it-it': "Colpo Scintilla",
			'pt-br': "Golpe Cintilante",
			'de-de': "Funkenschlag"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "akagi",
	description: {
		'en-us': "This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 760234,
				tcgplayer: 543953
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761138,
				tcgplayer: 548309
			},
		}
	],
}

export default card
