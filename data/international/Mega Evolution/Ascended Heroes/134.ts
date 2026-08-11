import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'es-mx': "Scraggy",
		'de-de': "Zurrokex",
		'it-it': "Scraggy",
		'pt-br': "Scraggy"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [559],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Knock Off",
			'fr-fr': "Sabotage",
			'es-es': "Desarme",
			'es-mx': "Desarme",
			'de-de': "Abschlag",
			'it-it': "Privazione",
			'pt-br': "Derrubar"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869745,
			tcgplayer: 675946
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870350,
			tcgplayer: 676959
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870349,
			tcgplayer: 677099
		}
	},
],
}

export default card
