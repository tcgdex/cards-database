import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia's Power Weight",
		fr: "Poids Pouvoir de Cynthia",
		de: "Cynthias Machtgewicht",
		it: "Vigorpeso di Camilla",
		es: "Pesa Recia de Cintia",
		pt: "Peso de Poder da Cíntia",
		'es-mx': "Pesa Recia de Cynthia"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Cynthia's Pokémon this card is attached to gets +70 HP.",
		fr: "Le Pokémon de Cynthia auquel cette carte est attachée reçoit +70 PV.",
		de: "Das Cynthias Pokémon, an das diese Karte angelegt ist, erhält +70 KP.",
		it: "Il Pokémon di Camilla a cui è assegnata questa carta ha 70 PS in più.",
		es: "El Pokémon de Cintia al que esté unida esta carta obtiene 70 PS más.",
		pt: "O Pokémon da Cíntia ao qual esta carta está ligada recebe 70 PS a mais.",
		'es-mx': "El Pokémon de Cynthia al que esté unida esta carta obtiene 70 PS más."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
