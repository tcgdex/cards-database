import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [768],

	name: {
		'en-us': "Golisopod",
		'fr-fr': "Sarmuraï",
		'es-es': "Golisopod",
		'it-it': "Golisopod",
		'pt-br': "Golisopod",
		'de-de': "Tectass"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hard Times Slash",
				'fr-fr': "Taillade en Panique",
				'es-es': "Tajo en Momentos Duros",
				'it-it': "Lacerazione Minacciosa",
				'pt-br': "Talho dos Desesperados",
				'de-de': "Harte Zeiten"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each of your opponent's Pokémon V and Pokémon-GX in play.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon-V et Pokémon-GX en jeu de votre adversaire.",
				'es-es': "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon V y Pokémon-GX en juego de tu rival.",
				'it-it': "Questo attacco infligge 50 danni in più per ogni Pokémon-V e ogni Pokémon-GX in gioco del tuo avversario.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Pokémon V e Pokémon-GX do seu oponente em jogo.",
				'de-de': "Diese Attacke fügt für jedes Pokémon-V und Pokémon-GX deines Gegners im Spiel 50 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Turn",
				'fr-fr': "Tour Fracassant",
				'es-es': "Golpe Giro",
				'it-it': "Girata Distruttiva",
				'pt-br': "Virada Esmagadora",
				'de-de': "Abdrehender Schmetterer"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 482964,
				tcgplayer: 219231
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482964,
				tcgplayer: 219231
			}
		},
	],
}

export default card
