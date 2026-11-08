import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Azelf",
		'fr-fr': "Créfadet",
		'es-es': "Azelf",
		'it-it': "Azelf",
		'de-de': "Tobutz",
		'pt-br': "Azelf",
		'ko-kr': "아그놈"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [482],
	hp: 70,
	types: ["Psychic"],

	description: {
		'en-us': "Known as “The Being of Willpower.” It sleeps at the\nbottom of a lake to keep the world in balance.",
		'fr-fr': "On l'appelle \" être de la volonté \". Il dort au fond\nd'un lac pour maintenir l'équilibre du monde.",
		'es-es': "Se le conoce como el Ser de la Voluntad. Duerme\nen el fondo de un lago para equilibrar el mundo.",
		'it-it': "Detto \"Essere della volontà\". Dorme sul fondo di\nun lago per mantenere il mondo in equilibrio.",
		'de-de': "\"Das starke Wesen\". Es schläft auf dem Grund\neines Sees und hält so die Welt in Balance.",
		'pt-br': "Este Pokémon é conhecido como o ser de força\nde vontade e dorme no leito de um lago para garantir\no equilíbrio do mundo.",
		'ko-kr': "의지의 신이라 불리고 있다.\n호수의 밑바닥에서 계속 잠을 자며\n세계의 균형을 지키고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psychic Arrow",
			'fr-fr': "Flèche Psy",
			'es-es': "Flecha Psíquica",
			'it-it': "Psicofreccia",
			'de-de': "Psychopfeil",
			'pt-br': "Flecha Psíquica",
			'ko-kr': "사이코애로"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon\ndel tuo avversario.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente.",
			'ko-kr': "상대의 포켓몬 1마리에게 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
