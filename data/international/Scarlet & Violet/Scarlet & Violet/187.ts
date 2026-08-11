import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pokémon Catcher",
		'fr-fr': "Attrape-Pokémon",
		'es-es': "Capturapokémon",
		'it-it': "Acchiappa-Pokémon",
		'pt-br': "Pegador de Pokémon",
		'de-de': "Pokémon-Fänger"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
		'fr-fr': "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
		'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		'it-it': "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
		'pt-br': "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
		'de-de': "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Studio Bora Inc.",

	thirdParty: {
        cardmarket: 702483,
        tcgplayer: 488093
    }
}

export default card