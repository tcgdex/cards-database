import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [824],
	set: Set,

	name: {
		'en-us': "Team Rocket's Blipbug",
		'fr-fr': "Larvadar de la Team Rocket",
		'de-de': "Team Rockets Sensect",
		'it-it': "Blipbug del Team Rocket",
		'es-es': "Blipbug del Team Rocket",
		'pt-br': "Blipbug da Equipe Rocket",
		'es-mx': "Blipbug del Equipo Rocket"
	},

	illustrator: "buchi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Searching Eyes",
			'fr-fr': "Yeux Scrutateurs",
			'de-de': "Suchende Augen",
			'it-it': "Sguardo Inquisitorio",
			'es-es': "Ojos Escrutadores",
			'pt-br': "Olhar Minucioso",
			'es-mx': "Ojos Fisgones"
		},

		effect: {
			'en-us': "Look at 1 of your opponent's face-down Prize cards.",
			'fr-fr': "Regardez l'une des cartes Récompense de votre adversaire (actuellement face cachée).",
			'de-de': "Schau dir 1 der verdeckten Preiskarten deines Gegners an.",
			'it-it': "Guarda una delle carte Premio coperte del tuo avversario.",
			'es-es': "Mira 1 de las cartas de Premio de tu rival que están boca abajo.",
			'pt-br': "Olhe 1 das cartas de Prêmio viradas para baixo do seu oponente.",
			'es-mx': "Mira 1 de las cartas de Premio de tu rival que están boca abajo."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825889,
				tcgplayer: 632841
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825889,
				tcgplayer: 632841
			}
		},
	],
}

export default card
