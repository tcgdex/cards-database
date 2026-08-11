import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [157],
	set: Set,

	name: {
		'en-us': "Ethan's Typhlosion",
		'fr-fr': "Typhlosion de Luth",
		'de-de': "Klarins Tornupto",
		'it-it': "Typhlosion di Armonio",
		'es-es': "Typhlosion de Eco",
		'pt-br': "Typhlosion do Ethan",
		'es-mx': "Typhlosion de Ethan"
	},


	illustrator: "GIDORA",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Ethan's Quilava",
		'fr-fr': "Feurisson de Luth",
		'de-de': "Klarins Igelavar",
		'it-it': "Quilava di Armonio",
		'es-es': "Quilava de Eco",
		'pt-br': "Quilava do Ethan",
		'es-mx': "Quilava de Ethan"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Buddy Blast",
			'fr-fr': "Explosion Partenaire",
			'de-de': "Kumpel-Explosion",
			'it-it': "Esplosione Amica",
			'es-es': "Amistad Explosiva",
			'pt-br': "Rajada Amiga",
			'es-mx': "Explosión Amistosa"
		},

		effect: {
			'en-us': "This attack does 60 more damage for each Ethan's Adventure card in your discard pile.",
			'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Aventure de Luth dans votre pile de défausse.",
			'de-de': "Diese Attacke fügt für jede Klarins Abenteuer-Karte in deinem Ablagestapel 60 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 60 danni in più per ogni carta Avventura di Armonio nella tua pila degli scarti.",
			'es-es': "Este ataque hace 60 puntos de daño más por cada carta de Aventura de Eco en tu pila de descartes.",
			'pt-br': "Este ataque causa 60 pontos de dano a mais para cada carta Aventura do Ethan na sua pilha de descarte.",
			'es-mx': "Este ataque hace 60 puntos de daño más por cada carta de Aventura de Ethan en tu pila de descartes."
		},

		damage: "40+"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Steam Artillery",
			'fr-fr': "Artillerie Vapeur",
			'de-de': "Dampfgeschütz",
			'it-it': "Artiglieria Vapore",
			'es-es': "Artillería de Vapor",
			'pt-br': "Artilharia de Vapor",
			'es-mx': "Artillería de Vapor"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826064,
				tcgplayer: 632990
			}
		},
	],
}

export default card
