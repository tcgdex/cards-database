import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [98],
	set: Set,

	name: {
		'fr-fr': "Krabby",
		'en-us': "Krabby",
		'es-es': "Krabby",
		'it-it': "Krabby",
		'pt-br': "Krabby",
		'de-de': "Krabby"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Eau Salée",
			'en-us': "Salt Water",
			'es-es': "Agua Salada",
			'it-it': "Acqua Salata",
			'pt-br': "Água Salgada",
			'de-de': "Salzwasser"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 2 cartes Énergie {W} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'en-us': "Flip a coin. If heads, search your deck for up to 2 Basic {W} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 2 cartas de Energía {W} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a due carte Energia base {W} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Jogue uma moeda. Se sair cara, procure por até 2 cartas de Energia {W} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 2 Basis-{W}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'fr-fr': "Pince-Masse",
			'en-us': "Crabhammer",
			'es-es': "Martillazo",
			'it-it': "Martellata",
			'pt-br': "Martelo Caranguejo",
			'de-de': "Krabbhammer"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733693,
				tcgplayer: 516667,
				cardtrader: 261127
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733693,
				tcgplayer: 516667,
				cardtrader: 261127
			}
		},
	],

	illustrator: "Yukiko Baba",

	
}

export default card
