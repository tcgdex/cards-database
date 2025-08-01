import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		es: "Ludicolo",
		it: "Ludicolo",
		pt: "Ludicolo",
		de: "Kappalores"
	},

	illustrator: "Framestore",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Table Service",
				fr: "Service à Table",
				es: "Servicio de Mesa",
				it: "Servizio al Tavolo",
				pt: "Serviço de Mesa",
				de: "Bedienung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage from 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à l’un de vos Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño a 1 de tus Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare uno dei tuoi Pokémon da 30 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 30 pontos de dano de 1 dos seus Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 30 Schadenspunkte bei 1 deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch and Run",
				fr: "Frapper et Partir en Courant",
				es: "Pega y Corre",
				it: "Pugnofuga",
				pt: "Socar e Correr",
				de: "Schlagen und Rennen"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
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

	retreat: 3,

	thirdParty: {
		cardmarket: 370767,
		tcgplayer: 186003
	}
}

export default card
