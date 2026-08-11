import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [88],
	set: Set,

	name: {
		'en-us': "Team Rocket's Grimer",
		'fr-fr': "Tadmorv de la Team Rocket",
		'de-de': "Team Rockets Sleima",
		'it-it': "Grimer del Team Rocket",
		'es-es': "Grimer del Team Rocket",
		'pt-br': "Grimer da Equipe Rocket",
		'es-mx': "Grimer del Equipo Rocket"
	},


	illustrator: "Mousho",

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Corrosive Sludge",
			'fr-fr': "Détritus Dégueu",
			'de-de': "Zersetzender Schlamm",
			'it-it': "Melma Corrosiva",
			'es-es': "Lodo Corrosivo",
			'pt-br': "Lodo Corrosivo",
			'es-mx': "Lodo Corrosivo"
		},

		effect: {
			'en-us': "At the end of your opponent's next turn, discard the Defending Pokémon and all attached cards.",
			'fr-fr': "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
			'de-de': "Lege am Ende des nächsten Zuges deines Gegners das Verteidigende Pokémon und alle angelegten Karten auf seinen Ablagestapel.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, scarta il Pokémon difensore e tutte le carte a esso assegnate.",
			'es-es': "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
			'pt-br': "No final do próximo turno do seu oponente, descarte o Pokémon Defensor e todas as cartas ligadas a ele.",
			'es-mx': "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825997,
				tcgplayer: 632931
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825997,
				tcgplayer: 632931
			}
		},
	],
}

export default card
