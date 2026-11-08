import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Serperior",
		'fr-fr': "Majaspic",
		'es-es': "Serperior",
		'es-mx': "Serperior",
		'de-de': "Serpiroyal",
		'it-it': "Serperior",
		'pt-br': "Serperior"
	},

	illustrator: "LINNE",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [497],

	evolveFrom: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
		'es-es': "Servine",
		'es-mx': "Servine",
		'de-de': "Efoserp",
		'it-it': "Servine",
		'pt-br': "Servine"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Regal Command",
			'fr-fr': "Ordre Majestueux",
			'es-es': "Mandato Realeza",
			'es-mx': "Mandato de Realeza",
			'de-de': "Hoheitlicher Befehl",
			'it-it': "Comando Regale",
			'pt-br': "Comando Real"
		},

		effect: {
			'en-us': "This attack does 20 damage for each of your Pokémon in play.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ciascuno dei tuoi Pokémon in gioco.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo."
		},

		damage: "20×"
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'en-us': "Solar Coiling",
			'fr-fr': "Enroulement Solaire",
			'es-es': "Enrosque Solar",
			'es-mx': "Enrosque Solar",
			'de-de': "Solarschlinge",
			'it-it': "Avvolgimento Solare",
			'pt-br': "Enrolada Solar"
		},

		effect: {
			'en-us': "If Rosa's Encouragement is in your discard pile, this attack does 150 more damage.",
			'fr-fr': "Si Encouragement d'Écho est dans votre pile de défausse, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si Apoyo de Nanci está en tu pila de descartes, este ataque hace 150 puntos de daño más.",
			'es-mx': "Si Motivación de Nanci está en tu pila de descartes, este ataque hace 150 puntos de daño más.",
			'de-de': "Wenn Rosys Ermutigung in deinem Ablagestapel ist, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			'it-it': "Se Incoraggiamento di Rina è nella tua pila degli scarti, questo attacco infligge 150 danni in più.",
			'pt-br': "Se Encorajamento da Rose estiver na sua pilha de descarte, este ataque causará 150 pontos de dano a mais."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo"
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 877543,
				tcgplayer: 685494
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo', 'staff'],
			thirdParty: {
				cardmarket: 879303,
				tcgplayer: 685498
			}
		},
	],
}

export default card
