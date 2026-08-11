import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cynthia's Power Weight",
		'fr-fr': "Poids Pouvoir de Cynthia",
		'de-de': "Cynthias Machtgewicht",
		'it-it': "Vigorpeso di Camilla",
		'es-es': "Pesa Recia de Cintia",
		'pt-br': "Peso de Poder da Cíntia",
		'es-mx': "Pesa Recia de Cynthia"
	},


	illustrator: "Studio Bora Inc.",

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The Cynthia's Pokémon this card is attached to gets +70 HP.",
		'fr-fr': "Le Pokémon de Cynthia auquel cette carte est attachée reçoit +70 PV.",
		'de-de': "Das Cynthias Pokémon, an das diese Karte angelegt ist, erhält +70 KP.",
		'it-it': "Il Pokémon di Camilla a cui è assegnata questa carta ha 70 PS in più.",
		'es-es': "El Pokémon de Cintia al que esté unida esta carta obtiene 70 PS más.",
		'pt-br': "O Pokémon da Cíntia ao qual esta carta está ligada recebe 70 PS a mais.",
		'es-mx': "El Pokémon de Cynthia al que esté unida esta carta obtiene 70 PS más."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826036,
				tcgplayer: 632964
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826036,
				tcgplayer: 632964
			}
		},
	],
}

export default card
