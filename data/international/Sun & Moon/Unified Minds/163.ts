import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'es-es': "Kangaskhan",
		'it-it': "Kangaskhan",
		'pt-br': "Kangaskhan",
		'de-de': "Kangama"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Draw",
				'fr-fr': "Double Pioche",
				'es-es': "Roba Doble",
				'it-it': "Pescata Doppia",
				'pt-br': "Compra Dupla",
				'de-de': "Zweifachzug"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tag Impact",
				'fr-fr': "Impact d’Escouade",
				'es-es': "Impacto Relevo",
				'it-it': "Impatto Alleati",
				'pt-br': "Impacto de Aliados",
				'de-de': "Team-Einschlag"
			},
			effect: {
				'en-us': "This attack does 50 damage for each of your TAG TEAM Pokémon in play.",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ESCOUADE en jeu.",
				'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon de equipo de RELEVOS en juego.",
				'it-it': "Questo attacco infligge 50 danni per ogni tuo Pokémon ALLEATI in gioco.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon ALIADOS em jogo.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl deiner TAG TEAM Pokémon im Spiel zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Kangaskhan protects its child by keeping it in its pouch. It has zero forgiveness for those who harm its child and will beat them down.",
	},

	thirdParty: {
		cardmarket: 388602,
		tcgplayer: 195163
	}
}

export default card
