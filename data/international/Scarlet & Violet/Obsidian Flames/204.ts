import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		'fr-fr': "Malosse",
		'en-us': "Houndour",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Meute Coordonnée",
			'en-us': "Coordinated Pack",
			'es-es': "Manada Coordinada",
			'it-it': "Branco Coordinato",
			'pt-br': "Matilha Coordenada",
			'de-de': "Koordiniertes Rudel"
		},

		effect: {
			'fr-fr': "Pour chacun de vos Malosse de Banc, cherchez dans votre deck une carte Énergie {D} de base, puis attachez-la à ce Malosse-là. Mélangez ensuite votre deck.",
			'en-us': "For each of your Benched Houndour, search your deck for a Basic {D} Energy card and attach it to that Houndour. Then, shuffle your deck.",
			'es-es': "Por cada uno de tus Houndour en Banca, busca en tu baraja 1 carta de Energía {D} Básica y únela a ese Houndour. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {D} per ogni Houndour nella tua panchina e assegnala a quell'Houndour. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Para cada um dos seus Houndour no Banco, procure por uma carta de Energia {D} Básica no seu baralho e ligue-a àquele Houndour. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche für jedes Hunduster auf deiner Bank dein Deck nach 1 Basis-{D}-Energiekarte und lege sie an jenes Hunduster an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Crocs Déterminés",
			'en-us': "Focus Fangs",
			'es-es': "Colmillos Certeros",
			'it-it': "Focalzanne",
			'pt-br': "Caninos Focalizados",
			'de-de': "Fokusfänge"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It is smart enough to hunt in packs. It uses a variety of cries for communicating with others.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725284,
				tcgplayer: 509951,
				cardtrader: 255646
			}
		},
	],

	illustrator: "KYUPIYAMA",

	
}

export default card
