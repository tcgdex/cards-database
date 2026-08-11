import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1004],
	set: Set,

	name: {
		'en-us': "Chi-Yu",
		'fr-fr': "Yuyu",
		'es-es': "Chi-Yu",
		'it-it': "Chi-Yu",
		'pt-br': "Chi-Yu",
		'de-de': "Yuyu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Allure",
			'fr-fr': "Allure",
			'es-es': "Atractivo",
			'it-it': "Affascinante",
			'pt-br': "Fascinar",
			'de-de': "Verlockung"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Ground Melter",
			'fr-fr': "Fonte du Terrain",
			'es-es': "Fundición de Tierra",
			'it-it': "Sciogliterra",
			'pt-br': "Derretimento de Campo",
			'de-de': "Bodenschmelzer"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 60 more damage. Then, discard that Stadium.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 60 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 60 puntos de daño más. Después, descarta ese Estadio.",
			'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 60 danni in più. Poi scarta quella carta Stadio.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 60 pontos de dano a mais. Em seguida, descarte aquele Estádio.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The envy accumulated within curved beads that sparked multiple conflicts has clad itself in fire and become a Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769213,
				tcgplayer: 550083
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769213,
				tcgplayer: 550083
			}
		},
	],

	illustrator: "Oku",

}

export default card