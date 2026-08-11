import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		'en-us': "Team Rocket's Larvitar",
		'fr-fr': "Embrylex de la Team Rocket",
		'de-de': "Team Rockets Larvitar",
		'it-it': "Larvitar del Team Rocket",
		'es-es': "Larvitar del Team Rocket",
		'pt-br': "Larvitar da Equipe Rocket",
		'es-mx': "Larvitar del Equipo Rocket"
	},


	illustrator: "Kuroimori",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mountain Munch",
			'fr-fr': "Dévore-Montagne",
			'de-de': "Gipfelmampfer",
			'it-it': "Sgranocchiacime",
			'es-es': "Mascamontañas",
			'pt-br': "Masca-montanhas",
			'es-mx': "Mascamontañas"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825967,
				tcgplayer: 632903
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825967,
				tcgplayer: 632903
			}
		},
	],
}

export default card
