import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'de-de': "Wuffels",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'es-mx': "Rockruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dig It Up",
			'fr-fr': "Dénicher",
			'es-es': "Socavar",
			'de-de': "Buddeln",
			'it-it': "Rinvenimento",
			'pt-br': "Desaterrar",
			'es-mx': "Hallazgo Desenterrado"
		},

		effect: {
			'en-us': "Look at the top card of your deck. You may discard that card.",
			'fr-fr': "Regardez la carte du dessus de votre deck. Vous pouvez défausser cette carte-là.",
			'es-es': "Mira la primera carta de tu baraja. Puedes descartar esa carta.",
			'de-de': "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deinen Ablagestapel legen.",
			'it-it': "Guarda la prima carta del tuo mazzo. Puoi scartare quella carta.",
			'pt-br': "Olhe a carta de cima do seu baralho. Você pode descartar aquela carta.",
			'es-mx': "Mira la primera carta de tu mazo. Puedes descartar esa carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'es-mx': "Estampida"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Yoshimi Miyoshi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817236,
				tcgplayer: 623511
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817236,
				tcgplayer: 623511
			}
		},
	],
}

export default card
