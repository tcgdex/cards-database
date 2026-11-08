import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'es-es': "Hitmontop",
		'es-mx': "Hitmontop",
		'de-de': "Kapoera",
		'it-it': "Hitmontop",
		'pt-br': "Hitmontop"
	},

	illustrator: "osare",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [237],
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spin and Draw",
			'fr-fr': "Virevolte Piocheuse",
			'es-es': "Giro y Robo",
			'es-mx': "Giro y Robo",
			'de-de': "Wirbeln und ziehen",
			'it-it': "Gira e Pesca",
			'pt-br': "Girar e Comprar"
		},

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			'es-mx': "Baraja tu mano en tu mazo. Después, roba 6 cartas.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'es-mx': "Patada Baja",
			'de-de': "Fußkick",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "It spins on its horn while dealing out elegant kicks. Its horn grows continuously through its lifetime.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869851,
				tcgplayer: 676052
			}
		}
	],
}

export default card
