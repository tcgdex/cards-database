import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lisia's Appeal",
		'fr-fr': "Charme d'Atalante",
		'es-es': "Atracción de Ariana",
		'it-it': "Fascino di Orthilla",
		'pt-br': "Apelo da Elisia",
		'de-de': "Xenias Aufruf"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot. If you do, the new Active Pokémon is now Confused.",
		'fr-fr': "Envoyez l'un des Pokémon de Banc de base de votre adversaire sur le Poste Actif. Dans ce cas, le nouveau Pokémon Actif est maintenant Confus.",
		'es-es': "Cambia 1 de los Pokémon Básicos en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si lo haces, el nuevo Pokémon Activo pasa a estar Confundido.",
		'it-it': "Sostituisci uno dei Pokémon Base nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Se lo fai, il nuovo Pokémon attivo viene confuso.",
		'pt-br': "Mande 1 dos Pokémon Básicos no Banco do seu oponente para o Campo Ativo. Se fizer isto, o novo Pokémon Ativo agora estará Confuso.",
		'de-de': "Wechsle 1 Basis-Pokémon von der Bank deines Gegners in die Aktive Position ein. Wenn du das machst, ist das neue Aktive Pokémon jetzt verwirrt."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794619,
				tcgplayer: 589990
			}
		},
	],

	illustrator: "Nobusawa/Mochipuyo",

}

export default card
