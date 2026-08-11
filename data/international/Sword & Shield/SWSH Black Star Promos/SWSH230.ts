import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'fr-fr': "Évoli Radieux",
		'de-de': "Strahlendes Evoli",
		'es-es': "Eevee Radiante",
		'pt-br': "Eevee Radiante",
		'it-it': "Eevee Lucente",
		'en-us': "Radiant Eevee"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Rassemblement Étincelant",
			'de-de': "Funkelndes Treffen",
			'es-es': "Grupo Resplandeciente",
			'pt-br': "Reunião Reluzente",
			'it-it': "Raduno Brillante",
			'en-us': "Twinkle Gathering"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un nombre de cartes inférieur ou égal au nombre de types de Pokémon que vous avez en jeu et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu so vielen Karten, wie du verschiedene Pokémon-Typen im Spiel hast, und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja una cantidad de cartas igual o inferior a cada tipo diferente de Pokémon que tengas en juego y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por um número de cartas no seu baralho até o número de tipos diferentes de Pokémon que você tiver em jogo e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di Pokémon di tipo diverso che hai in gioco e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for a number of cards up to the number of different types of Pokémon you have in play and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Ruée Propulsée",
			'de-de': "Boost-Sprint",
			'es-es': "Carrera Impulso",
			'pt-br': "Impulso de Corrida",
			'it-it': "Scatto Caricato",
			'en-us': "Boost Dash"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	thirdParty: {
		cardmarket: 653697
	}
}

export default card