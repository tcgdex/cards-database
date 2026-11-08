import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Solgaleo ◇",
		'fr-fr': "Solgaleo ◇",
		'es-es': "Solgaleo ◇",
		'it-it': "Solgaleo ◇",
		'pt-br': "Solgaleo ◇",
		'de-de': "Solgaleo ◇"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		791,
	],

	hp: 160,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Radiant Star",
				'fr-fr': "Étoile Soleil Levant",
				'es-es': "Estrella Sol Ascendente",
				'it-it': "Stella del Sole Nascente",
				'pt-br': "Estrela Radiante",
				'de-de': "Aufgangsstern"
			},
			effect: {
				'en-us': "For each of your opponent’s Pokémon in play, attach a Metal Energy card from your discard pile to your Pokémon in any way you like.",
				'fr-fr': "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Metal de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Por cada uno de los Pokémon de tu rival en juego, une 1 carta de Energía Metal de tu pila de descartes a tus Pokémon de la manera que desees.",
				'it-it': "Per ogni Pokémon del tuo avversario in gioco, assegna a piacimento ai tuoi Pokémon una carta Energia Metal dalla tua pila degli scarti.",
				'pt-br': "Para cada Pokémon em jogo do seu oponente, ligue 1 carta de Energia Metal da sua pilha de descarte aos seus Pokémon como desejar.",
				'de-de': "Lege für jedes Pokémon deines Gegners im Spiel 1 Metal-Energiekarte aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Corona Impact",
				'fr-fr': "Impact de Couronne",
				'es-es': "Impacto Corona",
				'it-it': "Impatto della Corona",
				'pt-br': "Impacto Coronal",
				'de-de': "Korona-Einschlag"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 160,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				'fr-fr': "Impact de Couronne",
			},
			effect: {
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This Pokémon is said to be a male evolution of Cosmog. At the activation of its third eye, it departs for another world.",
	},

	thirdParty: {
		cardmarket: 316016
	}
}

export default card
