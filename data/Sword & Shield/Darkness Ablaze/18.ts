import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
		es: "Golisopod",
		it: "Golisopod",
		pt: "Golisopod",
		de: "Tectass"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		it: "Wimpod",
		pt: "Wimpod",
		de: "Reißlaus"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Times Slash",
				fr: "Taillade en Panique",
				es: "Tajo en Momentos Duros",
				it: "Lacerazione Minacciosa",
				pt: "Talho dos Desesperados",
				de: "Harte Zeiten"
			},
			effect: {
				en: "This attack does 50 more damage for each of your opponent's Pokémon V and Pokémon-GX in play.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon-V et Pokémon-GX en jeu de votre adversaire.",
				es: "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon V y Pokémon-GX en juego de tu rival.",
				it: "Questo attacco infligge 50 danni in più per ogni Pokémon-V e ogni Pokémon-GX in gioco del tuo avversario.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada Pokémon V e Pokémon-GX do seu oponente em jogo.",
				de: "Diese Attacke fügt für jedes Pokémon-V und Pokémon-GX deines Gegners im Spiel 50 Schadenspunkte mehr zu."
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
				en: "Smash Turn",
				fr: "Tour Fracassant",
				es: "Golpe Giro",
				it: "Girata Distruttiva",
				pt: "Virada Esmagadora",
				de: "Abdrehender Schmetterer"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs."
	}
}

export default card
