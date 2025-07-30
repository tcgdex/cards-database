import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Typhlosion",
		fr: "Typhlosion de Luth",
		de: "Klarins Tornupto",
		it: "Typhlosion di Armonio",
		es: "Typhlosion de Eco",
		pt: "Typhlosion do Ethan",
		'es-mx': "Typhlosion de Ethan"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Buddy Blast",
			fr: "Explosion Partenaire",
			de: "Kumpel-Explosion",
			it: "Esplosione Amica",
			es: "Amistad Explosiva",
			pt: "Rajada Amiga",
			'es-mx': "Explosión Amistosa"
		},

		effect: {
			en: "This attack does 60 more damage for each Ethan's Adventure card in your discard pile.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Aventure de Luth dans votre pile de défausse.",
			de: "Diese Attacke fügt für jede Klarins Abenteuer-Karte in deinem Ablagestapel 60 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 60 danni in più per ogni carta Avventura di Armonio nella tua pila degli scarti.",
			es: "Este ataque hace 60 puntos de daño más por cada carta de Aventura de Eco en tu pila de descartes.",
			pt: "Este ataque causa 60 pontos de dano a mais para cada carta Aventura do Ethan na sua pilha de descarte.",
			'es-mx': "Este ataque hace 60 puntos de daño más por cada carta de Aventura de Ethan en tu pila de descartes."
		},

		damage: "40+"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Steam Artillery",
			fr: "Artillerie Vapeur",
			de: "Dampfgeschütz",
			it: "Artiglieria Vapore",
			es: "Artillería de Vapor",
			pt: "Artilharia de Vapor",
			'es-mx': "Artillería de Vapor"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card