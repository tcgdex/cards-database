import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [490],
	set: Set,

	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
		'es-es': "Manaphy",
		'it-it': "Manaphy",
		'pt-br': "Manaphy",
		'de-de': "Manaphy"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wave Veil",
			'fr-fr': "Voile Houleux",
			'es-es': "Velo de Olas",
			'it-it': "Ondavelo",
			'pt-br': "Véu de Ondas",
			'de-de': "Wellenschleier"
		},

		effect: {
			'en-us': "Prevent all damage done to your Benched Pokémon by attacks from your opponent's Pokémon.",
			'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques des Pokémon de votre adversaire.",
			'es-es': "Evita todo el daño infligido a tus Pokémon en Banca por ataques de los Pokémon de tu rival.",
			'it-it': "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi dei Pokémon del tuo avversario.",
			'pt-br': "Previna todo o dano causado aos seus Pokémon no Banco por ataques dos Pokémon do seu oponente.",
			'de-de': "Verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken von Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608491,
				tcgplayer: 263741
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608491,
				tcgplayer: 263741
			}
		},
	],
}

export default card
