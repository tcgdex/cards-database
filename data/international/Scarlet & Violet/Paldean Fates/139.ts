import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [642],
	set: Set,

	name: {
		'en-us': "Thundurus",
		'fr-fr': "Fulguris",
		'es-es': "Thundurus",
		'it-it': "Thundurus",
		'pt-br': "Thundurus",
		'de-de': "Voltolos"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Adverse Weather",
			'fr-fr': "Intempéries",
			'es-es': "Mal Tiempo",
			'it-it': "Meteo Avverso",
			'pt-br': "Clima Ruim",
			'de-de': "Widriges Wetter"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, prevent all damage done to your Benched Pokémon by attacks from your opponent's Pokémon.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques des Pokémon de votre adversaire.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, se evita todo el daño infligido a tus Pokémon en Banca por ataques de los Pokémon de tu rival.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi dei Pokémon del tuo avversario.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, previna todo o dano causado aos seus Pokémon no Banco por ataques dos Pokémon do seu oponente.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken von Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Gigantic Bolt",
			'fr-fr': "Éclair Géant",
			'es-es': "Rayo Gigantesco",
			'it-it': "Fulmine Colossale",
			'pt-br': "Raio Gigantesco",
			'de-de': "Gigantischer Blitz"
		},

		effect: {
			'en-us': "This Pokémon also does 90 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 90 dégâts.",
			'es-es': "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 90 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 90 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751678,
				tcgplayer: 534540,
				cardtrader: 274322
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.",
	},

}

export default card
